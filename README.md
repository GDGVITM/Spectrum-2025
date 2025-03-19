# Spectrum-2025
## Development Workflow
### Branching Strategy
- **Never commit directly to the `main` branch.**  
- Create a **new branch for each page or feature** being worked on.  
- Branch names should be page-name, e.g., `home-shweta`.  

### **Commit Messages**  
- Keep commit messages **clear and concise**.  
- Use meaningful commit messages that describe the change, e.g.:  
  - ✅ `Added user authentication logic to login page`  
  - ✅ `Fixed UI alignment issue in the navbar`  
  - ❌ `Updated file`  

### **Pull Request (PR) Guidelines**  
- Each branch should be merged via a **pull request (PR)** with a clear description.  
- PR messages should include:  
  - **What was changed?** (Feature added, bug fixed, improvement made)  
  - **Why was it needed?** (Context of the change)  
- Example PR message:  

  ```md
  Page: Added Event 1 to the Events Page  

  Description:  
  - Created a new section for Event 1 on the Events Page.  
  - Added event details including title, date, and description.  
  - Styled the event section to match the existing page design.
