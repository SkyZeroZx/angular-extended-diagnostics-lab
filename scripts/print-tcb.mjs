// Prints the Type-Check Block (TCB) of the component in a file.
// Usage: npm run tcb -- src/app/storage-meter.ts
//
// It use a private compiler option (`_enableTemplateTypeChecker`), the same one the
// language service use. Fine for a lab, not for a real tool. Tested with 22.3.0.

import { existsSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { NgtscProgram, createCompilerHost, readConfiguration } from '@angular/compiler-cli';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const fileArg = process.argv[2];
const file = fileArg && resolve(process.cwd(), fileArg).replace(/\\/g, '/');

if (!file || !existsSync(file)) {
  console.error('Usage: npm run tcb -- <component file>');
  process.exit(1);
}

const config = readConfiguration(join(root, 'tsconfig.json'));
const options = { ...config.options, noEmit: true, _enableTemplateTypeChecker: true };

const program = new NgtscProgram([file], options, createCompilerHost({ options }));
const checker = program.compiler.getTemplateTypeChecker();
const sourceFile = program.getTsProgram().getSourceFile(file);

for (const node of sourceFile.statements) {
  if (!ts.isClassDeclaration(node) || !node.name) continue;

  const tcb = checker.getTypeCheckBlock(node);
  if (tcb === null) continue;

  console.log(`// TCB for ${node.name.text} (${relative(root, file)})`);
  console.log(`// Generated in ${relative(root, tcb.getSourceFile().fileName)}`);
  console.log(tcb.getText());
  console.log();
}
