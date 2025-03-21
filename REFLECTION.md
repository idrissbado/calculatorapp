# Reflection Report

## Challenges Faced During the Project

Learning Git, CI, and QA tools presented several challenges throughout this project. Initially, understanding Git's branching model was confusing, especially when it came to resolving merge conflicts. The first time I encountered a merge conflict, I was unsure how to interpret the conflict markers and properly resolve the competing changes. After several practice attempts, I became more comfortable with the process.

Setting up the CI pipeline with GitHub Actions was another hurdle. Understanding the YAML syntax and the proper structure for workflow files took time to master. I made several mistakes in the configuration that caused the workflow to fail, but these failures actually helped me learn how to debug CI issues. Reading through the logs and understanding error messages became an essential skill.

Writing effective unit tests was challenging because it required thinking about edge cases and potential failure points. I had to shift my mindset from simply making features work to considering how they might break. Learning to use Jest's assertion methods and understanding concepts like mocking took practice.

## Benefits of the CI Pipeline

The CI pipeline dramatically streamlined our development process in several ways. First, it automated the testing process, ensuring that all tests ran on every code change without manual intervention. This caught bugs immediately after they were introduced, making them much easier to fix.

The pipeline also enforced code quality standards through linting. Before implementing CI, code style was inconsistent across the project. With automated linting checks, we maintained a consistent style that made the codebase more readable and maintainable.

Perhaps most importantly, the CI pipeline provided confidence when merging changes. Knowing that all tests passed and code met quality standards made the review process more focused on functionality and design rather than hunting for basic errors. This accelerated our development cycle and reduced the time spent on debugging.

## Improvements from Version Control and QA

Version control and QA practices significantly improved both collaboration and code quality. Git's branching model allowed us to work on features simultaneously without interfering with each other's work. This parallel development accelerated our progress and reduced bottlenecks.

Code reviews through pull requests led to knowledge sharing among team members. I learned new techniques and approaches by reviewing others' code, and feedback on my pull requests helped me improve my coding practices. The review process caught logical errors that automated tests missed and provided opportunities for optimization.

The comprehensive test suite we built gave us confidence to refactor code when needed. When making changes to the calculator's core functions, we could immediately verify that existing functionality remained intact. This safety net encouraged us to continuously improve the codebase rather than leaving suboptimal code in place out of fear of breaking something.

Overall, these practices transformed our development from a chaotic, error-prone process to a structured, reliable system that produced higher quality code with fewer bugs.

