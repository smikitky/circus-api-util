import { Command } from 'commander';
import dedent from 'dedent';
import { int } from '../utils/commander-utils.js';

export default (program: Command) => {
  return program
    .command('case-dl')
    .description('download CIRCUS DB cases in MHD format')
    .option('-o, --outdir <dir>', 'output directory (default: CWD)')
    .option('-f, --file', 'read list of case IDs from file')
    .option('-c, --combined', 'export combined label files')
    .option('-l, --crlf', 'use CRLF instead of LF for line endings')
    .option('-z, --zip', 'use zip compression instead of tgz')
    .option(
      '-p, --per-task <num>',
      'number of cases downloaded as a batch',
      int({ min: 1, max: 100 }),
      10
    )
    .argument(
      '<case-id...>',
      'case ID, or file containing IDs when --file is used'
    )
    .addHelpText(
      'after',
      '\n' +
        dedent`
          Examples:
            circus-api-util case-dl -o ~/data a2b4c6e8f
            circus-api-util case-dl --file case-ids.txt
        `
    );
};
