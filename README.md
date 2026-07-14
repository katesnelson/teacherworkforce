<p align="center">
  <img src="assets/media/logo.png" alt="ERRE Center logo" width="160">
</p>

<h1 align="center">Educator Recruitment, Retention, and Effectiveness (ERRE) Center</h1>

<p align="center">
  Research and policy resources on Missouri's educator workforce
  <br>
  <strong><a href="https://teacherworkforce.com">teacherworkforce.com</a></strong>
</p>

---

## About This Site

This repository contains the source code for the ERRE Center website, built with [Hugo](https://gohugo.io/) using the [HugoBlox Dev Portfolio](https://github.com/HugoBlox/hugo-theme-dev-portfolio) template and hosted for free on GitHub Pages.

The ERRE Center, supported by the Walton Family Foundation and the University of Missouri, conducts research on the educator workforce to inform state and district policy. Working with the Missouri Department of Elementary and Secondary Education (DESE) and the Department of Higher Education and Workforce Development (DHEWD), the Center studies teacher evaluation systems, teacher labor market dynamics, and educator working conditions, and translates its findings into reports, briefs, and policy recommendations.

The site includes:
- A homepage introducing the Center's mission and focus areas
- A **Team** section listing leadership, researchers, and collaborators
- A **Reports** section showcasing recent publications
- A **Contact** section for inquiries

---

## Table of Contents

- [Before You Start: Tools You'll Need](#before-you-start-tools-youll-need)
- [Understanding the Site Structure](#understanding-the-site-structure)
- [Before all Updates](#before-all-updates)
- [Minor Updates (single file, via GitHub.com)](#minor-updates-single-file-via-githubcom)
- [Major Updates (multiple files, via GitHub Desktop)](#major-updates-multiple-files-via-github-desktop)
- [Using Claude to Help With Updates](#using-claude-to-help-with-updates)
- [Getting Help](#getting-help)
- [Credits](#credits)

---

## Before You Start: Tools You'll Need

You don't need any web design or coding experience to maintain this site. You will need:

1. **A GitHub account** — free at [github.com/join](https://github.com/join). This is where the website's files live.
2. **Access to this repository** — ask the current site admin to add you as a collaborator (GitHub → repository → *Settings* → *Collaborators*).
3. **GitHub Desktop** *(only needed for larger updates)* — a free application that lets you download the site to your computer and upload changes back, without typing any commands. Download it at [desktop.github.com](https://desktop.github.com/).
4. *(Optional)* **A Claude account** — helpful for drafting text, editing Markdown files, or troubleshooting formatting. See [Using Claude to Help With Updates](#using-claude-to-help-with-updates) below.

> 💡 **Tip:** For small text edits (fixing a typo, adding a team member), you can do everything directly on GitHub.com in your browser — no downloads required. Save GitHub Desktop for bigger changes.

---

## Understanding the Site Structure

The site's content lives in the `content/` folder as **Markdown files** (`.md`) — plain text files with simple formatting. Each page or section pulls from a "block" of content defined in a file like `_index.md`. You generally don't need to touch the site's design/code files (in `layouts/`, `assets/`, etc.) — most updates only involve editing or adding Markdown files and images.

Common folders you may work in:

| Folder | Contents |
|---|---|
| `content/home/_index.md` (or similar) | Homepage sections (hero text, about text, contact info) |
| `data/authors/` and `content/team/` | Individual team member profiles |
| `content/projects/` | Reports and publications shown in the Reports section |
| `static/media/` or `assets/media/` | Images, including the logo |

> ⚠️ If you're not sure where a specific piece of content lives, search the repository on GitHub.com (press `t` while browsing the repo, or use the search bar) for a keyword from the text you want to change.

---

## Before all Updates

Ensure you have a complete backup copy of the current version of the entire repository. 
In GitHub navigate to the repository and click the green **Code** button in the upper right corner of the screen. On the **Local** tab select Download ZIP.

---

## Minor Updates (single file, via GitHub.com)

Use this method for small, self-contained changes — for example, **adding a new team member**, **fixing a typo**, or **adding a single report**. This is done entirely in your browser.

### Steps

1. **Go to the repository** on GitHub.com and sign in.
2. **Navigate to the file** you want to change (e.g., a team member profile, or `_index.md` for homepage text).
3. Click the **pencil icon** (✏️ "Edit this file") in the top-right of the file view.
4. Make your changes directly in the text editor.
   - To **add a team member**, duplicate an existing profile file (open a similar file, copy its content, then create a new file with the new person's info — see below).
   - To **edit existing text**, just type your changes.
5. Scroll to the bottom. Under "Commit changes":
   - Add a short, clear description of what you changed (e.g., "Add Jane Smith to Researchers").
   - Select **"Create a new branch and start a pull request"** rather than committing directly to `main`. This creates a safety checkpoint before your change goes live.
6. Click **Propose changes**, then **Create pull request**.
7. Review the preview of your changes, then click **Merge pull request** to publish it to the live site.
8. The site will automatically rebuild and update within a few minutes (GitHub Pages handles this for you).

### Adding a new file (e.g., a new team member or report)

1. Go to the relevant folder (e.g., `content/team/` or `content/projects/`).
2. Click **Add file → Create new file**.
3. Name the file following the existing pattern (e.g., `jane-smith.md`). 
4. If the files you need to add are located in their own named folder (e.g. `content/projects/tel-mo-report/`) when naming your new file (box that says "Name your file..." above the text input box) write the name of the project folder followed by a `/`, which should be followed by the name of the file you need to create (e.g. `index.md`). For example, to create a new Report called "MO_Reports" add a file named `MO_Reports/index.md` to the `/content/projects/` folder. This should create a new folder with a single file in it. You can then update the contents of `index.md` and add other resources to the folder.
5. For new team members only you will want to add a .yaml file under the `data/authors/` folder in addition to create a new profile in `content/team/`.
6. Copy the structure for author or project pages from an existing, similar file (open it in another tab for reference) and fill in the new person's or report's details.
7. Commit as a pull request and merge, following steps 5–8 above.

---

## Major Updates (multiple files, via GitHub Desktop)

Use this method for larger changes that touch several files or the site's structure — for example, **adding a new menu item and page** (like an "Events" section), **reorganizing content**, or **changing multiple pages at once**.

### One-Time Setup

1. Install [GitHub Desktop](https://desktop.github.com/) and sign in with your GitHub account.
2. In GitHub Desktop, choose **File → Clone Repository**, select this repository from the list (or paste its URL), and choose a location on your computer to save it.

### Making Updates

1. **Open the project folder** on your computer (GitHub Desktop shows a "Show in Explorer/Finder" option).
2. **Make your changes** using a text editor. [Visual Studio Code](https://code.visualstudio.com/) (free) is a good option and works well with Markdown files. You can:
   - Edit existing `.md` files
   - Add new folders/files (e.g., a new `content/events/_index.md` for an Events page)
   - Add or replace images in the media folder
3. If you're adding a **new page or menu item**, you will typically need to:
   - Create a new content folder with an `_index.md` file
   - Add a matching entry in the site's menu configuration file (often `config/_default/menus.yaml`)
   - This step is more technical — see [Using Claude to Help With Updates](#using-claude-to-help-with-updates) below for a prompt that can generate this for you.
4. **Preview your changes locally (optional but recommended).** If you have Hugo installed, run `hugo server` from the project folder and view the site at `localhost:1313` before publishing. This step is optional — Claude can help you decide whether it's necessary for your change.
5. **Return to GitHub Desktop.** It will list all the files you've changed.
6. Write a short **summary** of your changes in the box at the bottom left (e.g., "Add Events page and menu link").
7. Click **Commit to main** (or commit to a new branch if you'd like an extra review step first).
8. Click **Push origin** at the top to upload your changes to GitHub.
9. If you committed to a branch, go to GitHub.com and open a pull request to merge it into `main`, as described in the Minor Updates section.
10. The live site will rebuild automatically within a few minutes.

---

## Using Claude to Help With Updates

You can use [Claude](https://claude.ai) to draft text, write or edit Markdown/config files, and troubleshoot formatting — but **you** should always be the one to review and apply changes in GitHub (via the steps above), rather than giving Claude direct access to the live repository.

A good workflow is:
1. Copy the relevant file(s) content from GitHub (or download the repo with GitHub Desktop or as a ZIP file from the GitHub repository).
2. Ask Claude to make the change, pasting in the current file content or providing access to the repository files if using Claude Desktop.
3. Copy Claude's output back into GitHub (or your local file), then commit and push using the steps above.

### Example prompts

**Adding a team member:**
> "Here is an existing team member profile from our Hugo site: [paste content]. Please create a new profile in the same format for [Name], who is a [role] with interests in [topics]. Use a matching filename."

**Editing homepage text:**
> "Here is our homepage `_index.md` file: [paste content]. Please rewrite the 'About' section to also mention our new partnership with [organization], while keeping the same Markdown/YAML formatting."

**Adding a new page and menu item:**
> "I'm adding a new 'Events' page to our Hugo site built with the HugoBlox Dev Portfolio theme. Here is our homepage `_index.md` for reference on formatting: [paste content], and here is our menu config file: [paste content]. Please create the content file for an Events landing page and show me the exact addition needed in the menu file so 'Events' appears in the site navigation."

**Troubleshooting a formatting error:**
> "I made an edit to this file and now the site build seems broken (or a section isn't displaying correctly). Here is the file: [paste content]. Can you check the Markdown/YAML formatting for errors?"

> 💡 **Tip:** Always tell Claude which theme you're using (HugoBlox Dev Portfolio) and paste in a real example file from your site — this helps Claude match the exact formatting your site expects.

---

## Getting Help

- **HugoBlox documentation:** [docs.hugoblox.com](https://docs.hugoblox.com/)
- **GitHub Desktop help:** [docs.github.com/en/desktop](https://docs.github.com/en/desktop)
- **GitHub basics:** [docs.github.com/en/get-started](https://docs.github.com/en/get-started)

If you're ever unsure whether a change needs the "minor" or "major" update process, it's safest to start with the minor (GitHub.com) process — if it turns out to need more, you can always switch to GitHub Desktop.

---

## Credits

Site built by Kate Nelson (2026) using the HugoBlox [Dev Portfolio](https://github.com/HugoBlox/hugo-theme-dev-portfolio) template, hosted on GitHub Pages.

MIT © 2016–present [**Lore Labs**](https://lore.tech/?utm_source=github&utm_medium=readme)
