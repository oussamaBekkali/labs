---
name: php-examples
description: Creates, adapts, and validates PHP examples with a step-by-step tutorial for each topic, following the project's PHP version and architecture. Use when asked for PHP exercises, lab examples, runnable snippets, or examples of exceptions, namespaces, traits, or Laravel conventions.
---

# PHP Example Creator

## Role

Create short, understandable, executable PHP examples tailored to the user's real project.

## When to use this skill

Use it to create or adapt PHP exercises, examples of language features, Laravel demos, or practical content for a lab. Do not use it to rewrite a complete application without an explicit request.

## Inputs and context

- Read the README or brief provided and the neighboring files in the target location.
- Review `composer.json`, relevant instructions, and the pertinent code to identify the actual PHP version, framework, autoload setup, and conventions.
- Check whether the example can reuse existing classes or services. Do not invent models, dependencies, versions, or lived problems.
- If a detail is missing but a simple assumption allows progress, choose a self-contained example and clearly note what is simulated. Ask for clarification only if the choice materially changes the result.

## Procedure

1. Reformulate the expected deliverable and choose the requested path. Preserve existing files; do not replace them without reviewing their contents.
2. Infer the PHP version and dependencies from the project files. Use only functions, syntax, and commands compatible with the project.
3. Create a subfolder per concept or exercise when multiple examples are requested. In each subfolder, provide an executable PHP file named `exemple.php` and an associated `tutoriel.md`. If an existing structure requires other names, keep that structure and clearly document the example path.
4. In each tutorial, explain the example itself, not just the concept: walk through the important lines or blocks in execution order, define the role of the PHP elements used, and connect each step to its observable effect. Also state the objective, relevant files, the command to run from a specific directory, the expected result, the link to the project architecture, and a limit or follow-up exercise. Adjust the level of detail to the request.
5. Connect each example to a concrete use case in the project. Clearly distinguish a self-contained demonstration from a feature that is actually integrated.
6. Keep the code small and educational: explicit input, descriptive names, types when the project uses them, and observable output. Show exceptions handled at an appropriate boundary; use namespaces according to the real autoload setup; use a trait only for a shared behavior that genuinely fits it.
7. Add or update a parent README listing each concept, its example, and its tutorial, with startup commands when several folders are involved.
8. Validate the PHP files with `php -l` if PHP is available. Run relevant targeted tests if the project has them. If tools are missing, do not claim the examples were run and state precisely what verification should be performed.
9. Summarize the files created, the commands to run, the validation result, and any limitations.

## Rules

- Respond in the language of the request while preserving the language and style of the existing files.
- Do not include a framework demonstration when a standalone version would be clearer; if it depends on Laravel, follow Laravel conventions rather than simulating its APIs.
- Do not expose secrets and never modify `.env`.
- Avoid adding dependencies for simple language examples.
- Do not present fictional data as real data, or a standalone exercise as code already integrated.
- Limit changes to the requested files and the necessary execution documentation.

## Example requests

- “Create a PHP example of an exception for the article creation form.”
- “Prepare three runnable exercises on namespaces, traits, and exceptions.”
- “Adapt this PHP example to the PHP version and Composer autoload configuration of my project.”

## Final verification

- Each requested concept has a subfolder with a PHP example and its associated tutorial, unless a documented existing convention says otherwise.
- Each tutorial explains concretely the important lines or blocks in the example and the execution path to the result.
- The examples respect the observed version and conventions.
- The parent README references the examples, tutorials, and valid commands.
- The validation status is reported without exaggeration.