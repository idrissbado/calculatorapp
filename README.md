# Calculator App: Learning Version Control, CI, and QA

![Calculator App](https://placeholder.svg?height=300&width=500)

## 📝 Description

This Calculator App is a learning project designed to introduce high school students to essential software development practices including Version Control (Git), Continuous Integration (CI), and Quality Assurance (QA). The project features a fully functional calculator with a beautiful, responsive interface built using Next.js and Tailwind CSS.

## ✨ Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Responsive design that works on all devices
- Clean, modern UI with visual feedback
- Comprehensive test suite
- Automated CI pipeline

## 🛠️ Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Testing**: Jest
- **CI/CD**: GitHub Actions
- **Version Control**: Git & GitHub
- **Linting**: ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/calculator-app.git
   cd calculator-app
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the calculator.

## 📋 Assignment Steps

Follow these steps to complete the assignment:

### Part 1: Version Control with Git

1. **Set Up Git and GitHub**:
   - Install Git from [git-scm.com](https://git-scm.com/)
   - Configure Git with your name and email:
     \`\`\`bash
     git config --global user.name "Your Name"
     git config --global user.email "your.email@example.com"
     \`\`\`
   - Create a GitHub account at [github.com](https://github.com/)
   - Create a new repository named "calculator-app"

2. **Initialize Your Repository**:
   \`\`\`bash
   mkdir calculator-app
   cd calculator-app
   git init
   git remote add origin https://github.com/yourusername/calculator-app.git
   \`\`\`

3. **Create Initial Commit**:
   - Copy the project files to your local repository
   - Stage and commit the files:
     \`\`\`bash
     git add .
     git commit -m "Initial commit: Basic calculator functionality"
     git push -u origin main
     \`\`\`

4. **Practice Branching and Merging**:
   - Create a feature branch:
     \`\`\`bash
     git checkout -b feature/scientific-functions
     \`\`\`
   - Make changes to add scientific functions
   - Commit and push your changes:
     \`\`\`bash
     git add .
     git commit -m "Add scientific calculator functions"
     git push origin feature/scientific-functions
     \`\`\`
   - Create a pull request on GitHub
   - Merge the pull request into the main branch

5. **Collaborate with Peers**:
   - Have a classmate clone your repository
   - Each person should create different branches for new features
   - Practice resolving merge conflicts when they occur
   - Document the process in your reflection report

### Part 2: Continuous Integration (CI)

1. **Set Up GitHub Actions**:
   - Create a `.github/workflows` directory in your repository
   - Add the CI configuration file (ci.yml) provided in this project
   - Commit and push this file to your repository

2. **Verify CI Pipeline**:
   - Make a change to your code and push it
   - Go to the "Actions" tab in your GitHub repository
   - Verify that the workflow runs automatically
   - Check if tests and linting pass

3. **Intentionally Break the Build**:
   - Create a new branch
   - Introduce a bug (e.g., modify a function to return incorrect results)
   - Push the changes and create a pull request
   - Observe the CI pipeline failing
   - Fix the bug and verify the pipeline passes

4. **Document CI Process**:
   - Take screenshots of passing and failing builds
   - Include these in your QA report
   - Explain how CI helped catch issues before they reached the main branch

### Part 3: Quality Assurance (QA)

1. **Write Unit Tests**:
   - Review existing tests in `__tests__/calculator.test.ts`
   - Add at least 3 new test cases for edge cases
   - Run the tests locally:
     \`\`\`bash
     npm run test
     \`\`\`

2. **Use Linting**:
   - Run the linter to check code style:
     \`\`\`bash
     npm run lint
     \`\`\`
   - Fix any issues identified by the linter
   - Document the issues found and fixed

3. **Conduct Code Reviews**:
   - Create a pull request for a new feature
   - Ask a classmate to review your code
   - Provide constructive feedback on a classmate's pull request
   - Document the feedback received and given

4. **Prepare QA Report**:
   - Create a document listing all tests written
   - Include linting issues found and fixed
   - Summarize code review feedback
   - Explain how these practices improved code quality

### Submission Requirements

1. **GitHub Repository Link**:
   - Ensure your repository is public
   - Verify it contains all project files
   - Check that the CI workflow is properly configured

2. **Reflection Report (200-300 words)**:
   - Create a file named `REFLECTION.md` in your repository
   - Address these questions:
     - What challenges did you face while learning Git, CI, and QA tools?
     - How did the CI pipeline help streamline the development process?
     - How did version control and QA practices improve collaboration and code quality?
   - Include specific examples from your experience

3. **QA Report**:
   - Create a file named `QA_REPORT.md` in your repository
   - Include sections for:
     - Unit tests written and their purpose
     - Linting issues found and resolved
     - Summary of code reviews conducted
     - Screenshots of CI pipeline results

## 🧪 Development Practices

### Version Control with Git

This project uses Git for version control. Here's our workflow:

1. Create a feature branch from `main`:
   \`\`\`bash
   git checkout -b feature/new-feature
   \`\`\`

2. Make changes and commit them:
   \`\`\`bash
   git add .
   git commit -m "Add new feature: description"
   \`\`\`

3. Push changes to GitHub:
   \`\`\`bash
   git push origin feature/new-feature
   \`\`\`

4. Create a Pull Request on GitHub for review.

5. After approval, merge into `main`.

### Continuous Integration (CI)

We use GitHub Actions for continuous integration. Our CI pipeline:

- Runs automatically on every push and pull request
- Installs dependencies
- Runs linting checks
- Executes all tests
- Builds the application

This ensures that all code changes maintain quality standards before being merged.

### Quality Assurance (QA)

Our QA practices include:

- **Unit Testing**: All calculator functions have corresponding unit tests
- **Linting**: ESLint enforces code style and catches potential issues
- **Code Reviews**: All pull requests require a review before merging
- **Manual Testing**: Final verification on different devices and browsers

## 📊 Project Structure

\`\`\`
calculator-app/
├── .github/workflows/  # CI configuration
├── app/                # Next.js app directory
├── components/         # React components
├── lib/                # Utility functions
├── __tests__/          # Test files
├── .eslintrc.json      # ESLint configuration
├── REFLECTION.md       # Your reflection report
├── QA_REPORT.md        # Your QA report
└── README.md           # This file
\`\`\`

## 🤝 How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Learning Objectives

Through this project, students will learn:

- How to use Git for version control
- How to collaborate with others using branches and pull requests
- How to set up and use a CI pipeline
- How to write and run tests
- How to ensure code quality through linting and code reviews

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

