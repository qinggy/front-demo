# front-demo

> - record the front study or work project
> - front structure React, Knockout.js <br/>
> - front technology arttemplate

### Installing Node Packages with Yarn

Yarn is a Node package manager [created by Facebook26](https://code.facebook.com/posts/1840075619545360). It was designed with the goal of simplifying and optimizing Node package installation and maintenance. Yarn is backwards compatible with npm so transition is easy. It has a couple nifty features:

    - Caches packages so you don't need to download packages more than once
    - Capable of installing packages from the npm registry, the bower registry, or a mix of packages from each
    - Simplified console output
    - Consistent package installation behavior (no wondering if the order in which you installed things is different from a coworker)

> **Note**: For a quick summary of yarn commands, head straight to the Yarn Commands Summary section at the bottom.

### Installing Yarn
Most workspaces come with npm installed for you already. Let's check if it's installed by running npm -v.

```js
    npm install -g yarn || npm install --save-dev yarn
```
This installs Yarn globally (not just in the node_modules directory in our project folder) so we can simply use the yarn command to use Yarn.


### Initializing a Project with Yarn
> **Note**: While yarn init isn't required to install packages with Yarn, it is helpful when creating a real project. If you're simply toying with Yarn in a throwaway workspace, skip to **Installing Packages with Yarn**.

Now that Yarn is installed, we can put it to work. Let's first make sure it knows this is a Yarn project by running yarn init. You're then free to enter text for the options it gives you or just hit enter to skip or use the default. For this guide, I only care about a couple of them, the rest, like version or entry point, I'll just hit enter for.

```js
    bradydowLinq:~/workspace/testing $ yarn init
    yarn init v0.15.0
    question name (testing):
    question version (1.0.0):
    question description: 
    question entry point (index.js):
    question author: 
    question License (MIT):
    success Saved package.json
    Done in 42.84s.
    bradydowLinq:~/workspace/testing $
```

This just created a package.json file in our project folder containing some information about our project. It will soon contain a list of packages we have installed.

### Installing Packages with Yarn
To install a package using Yarn, simply run the command yarn add [package-name]. Right now, I want to install the aws-sdk package from the npm registry so I will run:`

```js
yarn add aws-sdk
```
My package is now installed and Yarn has modified or created 3 files for me:

    ![image](front-demo/ae38eedf5a61526baf5b6ef72aa05cdcde0d6f6e.png)

    1. node_modules directory where my package is located.
    2. package.json file where it has added my package to a dependencies list.This allows others to download my project and simply run yarn to install all packages that I've added.
    3. yarn.lock file which prevents me from causing issues for myself by running yarn operations in several different terminals at once.

Now that we have our first package installed, we can go on our merry way, building out the rest of our project and running yarn add anytime we need to install new packages.

### Yarn Commands Summary
##### Starting a new project
```js
yarn init
```
##### Adding a dependency`

```js 
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```
#### Updating a dependency
```js
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

#### Removing a dependency
```js
yarn remove [package]
```
#### Installing all the dependencies of project
```js
yarn || yarn install
```
Hopefully this all gives you a basic knowledge of how Yarn works but feel free to reply with questions, comments, and other helpful insights.
