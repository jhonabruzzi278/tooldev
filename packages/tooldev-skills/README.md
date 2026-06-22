# tooldev-skills

Install verified AI skill files from [ToolDev](https://tooldev.dev) into your project with a single command.

Skills are structured markdown files (`SKILL.md`) that give your AI code assistant (Kiro, Cursor, Copilot, etc.) specialized knowledge about developer tools.

## Usage

```bash
# Install a skill
npx tooldev-skills install terraform

# List all available skills
npx tooldev-skills list

# Search skills by keyword
npx tooldev-skills search frontend
```

## What is a Skill?

A skill is a `SKILL.md` file installed to `.agents/skills/<slug>/SKILL.md` in your project. It contains:

- Key information (category, pricing, license, compatibility)
- Features list
- Step-by-step usage guide
- When to use / when not to use
- Code examples with outputs
- Tips and best practices
- FAQ
- Troubleshooting

## Available Skills

43+ skills across frontend, backend, devops, design, AI and more. Run `npx tooldev-skills list` to see all.

## More Info

Visit [tooldev.dev/skills](https://tooldev.dev/skills) to learn more.
