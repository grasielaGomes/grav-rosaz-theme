# Folder `user/` – Site Instituto Suore Francescane Missionarie di Susa - Beato Rosaz (Grav)

This repository contains **only the `user/` folder** of a Grav installation.  
The Grav core (`system/`, `index.php`, etc.) **is not included in this repository** – each developer must download it locally.

---

## Stack

- **Grav CMS**: 1.7.x (Grav + Admin)
- **PHP**: 8.5.x (recommended for all machines)
- **Node.js**: 18+ / **npm**: 9+ (required for the `rosaz-theme`)
- **Custom theme**: `user/themes/rosaz-theme` (Tailwind + Twig)
- **Multilingual site**: `pt` and `it`

---

## Project setup (first time on the machine)

### 1. Download Grav + Admin

- Go to the official Grav website and download the zip file of **Grav Core + Admin**.
- Extract the file into a folder, for example:
  ```bash
  ~/code/grav-site/grav-admin
  ```

### 2. Clone this repository corresponding to the `user/` folder

- Run the commands below to replace the default `user/` folder with the contents of this repository:

  ```bash
  cd ~/code/grav-site/grav-admin
  rm -rf user
  git clone <REPO-URL> user
  ```

- After this, the directory structure will look like this:

  ```
  grav-admin/
  ├── system/
  ├── index.php
  └── user/  # => contents of this repository
  ```

---
