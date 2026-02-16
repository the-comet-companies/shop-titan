# Linting & Commit Workflow

This project enforces code quality standards using **Husky** and **lint-staged**. This ensures that no code with linting errors can be committed to the repository, preventing deployment failures.

## 🛠 The Stack

- **Husky**: Git hooks manager (triggers scripts on commit).
- **lint-staged**: Runs linters only on staged files (faster than linting the whole project).
- **Next.js Lint**: The default ESLint configuration for Next.js.

## 🚀 How It Works

1.  **Stage Files**: You run `git add .` to stage your changes.
2.  **Commit**: You run `git commit -m "..."`.
3.  **Pre-commit Hook**: Husky triggers the script at `.husky/pre-commit`.
    - This script changes directory to `apps/marketing` (where the Next.js app lives).
    - It runs `npx lint-staged`.
4.  **Linting**: `lint-staged` checks `apps/marketing/lint-staged.config.js`.
    - It matches all staged `*.ts` and `*.tsx` files.
    - It runs `next lint --fix --file <filename>` on each one.
5.  **Success/Failure**:
    - ✅ **Pass**: If no errors are found (or if they are auto-fixed), the commit proceeds.
    - ❌ **Fail**: If errors exist that cannot be auto-fixed, the commit is blocked. You must fix them and try again.

## 📂 Configuration Files

| File | Purpose |
| :--- | :--- |
| `apps/marketing/package.json` | Contains `devDependencies` for husky and lint-staged. |
| `apps/marketing/lint-staged.config.js` | Configures `lint-staged` to use `next lint` correctly with the `--file` flag. |
| `.husky/pre-commit` | The shell script that git executes before committing. |

## 🔧 Troubleshooting

### "cannot spawn .husky/pre-commit: No such file or directory"
**Cause**: The hook file is missing the executable permission (common on Windows).
**Fix**:
```bash
git update-index --chmod=+x .husky/pre-commit
```

### "Couldn't find any 'pages' or 'app' directory"
**Cause**: `lint-staged` was passing files without the `--file` flag, confusing Next.js.
**Fix**: Ensure `lint-staged.config.js` is being used (it handles the argument formatting).

### "A 'require()' style import is forbidden"
**Cause**: The project's ESLint rules enforce ESM imports, but config files often need CommonJS.
**Fix**: Add `/* eslint-disable @typescript-eslint/no-require-imports */` to the top of the config file.

## ⚠️ Bypassing Verification
If you absolutely must commit without linting (e.g., for a WIP save), use the `--no-verify` flag:
```bash
git commit -m "wip" --no-verify
```
**Note**: This is discouraged as it may lead to deployment failures.
