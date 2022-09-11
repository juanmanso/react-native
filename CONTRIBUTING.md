<!--
This file is part of _RN Repository_

_RN Repository_ is free software: you can redistribute it and/or modify it
under the terms of the GNU General Public License as published by the Free
Software Foundation, either version 3 of the License, or (at your option) any
later version.

_RN Repository_ is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
details.

You should have received a copy of the GNU General Public License along with
_RN Repository_. If not, see <https://www.gnu.org/licenses/>.
-->

<!--
These contributing guidelines are generic and might not apply for this examples
and spiking repository. Nonetheless, if anyone feels the need to contribute,
please read these guidelines to have a better idea of how the repository is
organized and maintained.
-->

# Contributing

When contributing to this repository, please follow the guidelines below.
They are based on [airbnb's javascript style guide](https://github.com/airbnb/javascript#table-of-contents)

<br>

## Table of Contents

- [General](#general)
  - [Naming Conventions](#naming-conventions)
    - [Functions](#functions)
    - [Components and Screens](#components-and-screens)
    - [Enums, Interfaces and Types](#enums,-interfaces-and-types)
  - [Documents](#documents)
  - [Folder Structures](#folder-structures)
    - [Components](#components-folder)
    - [Screens](#screens-folder)
  - [Spikes](#spikes)
  - [Atomic Design](#atomic-design)
    - [Atoms](#atoms)
    - [Molecules](#molecules)
    - [Organisms](#organisms)
- [Version Control](#version-control)
  - [Branch Names](#branch-names)
  - [Branches Lifetime](#branches-lifetime)
  - [Integration](#integration)
  - [Commits](#commits)
  - [Commit Messages](#commit-messages)

<br>
<br>

# General

## Naming Conventions

Folder and file names follow the convention of the main element in them. Thus,
if it is a component, the convention will be the one of a component. If the main
element is a (set of) function(s), files and folders should follow that
convention.

### Functions

As a general rule, [camel case](https://en.wikipedia.org/wiki/Camel_case)
must be used for files and folders.

Incorrect examples:

- "API"
- "this_is_a_function"

Correct examples:

- "api"
- "thisIsAFunction"

### Enums, Interfaces and Types

Enums, interfaces and types should follow
[pascal case](https://techterms.com/definition/pascalcase) convention with an
uppercase letter related to the element.

Correct examples:

- "EThisIsAnEnum"
- "EAnotherEnum"
- "IThisIsAnInterface"
- "IAnotherInterface"
- "TThisIsAType"
- "TAnotherType"

<br>

### Components and Screens

For React Components, we follow [pascal case](https://techterms.com/definition/pascalcase)

Correct examples of objects:

- "ThisIsAComponent"
- "AnotherComponent"

We mostly avoid adding `index.ts` files for each folder. An `index.ts` is used
only for wrapper folders that contain other components.

<br>

## Folder Structure

To have smaller and better scoped files, we chose to go for the following
convention, where a Component or a Screen may have multiple files.
The possible files are:

**Hooks file**

The intent of this file is to host the component's logic. By doing so, we aim
to have representational components stored in its corresponding `.tsx` file and
 minimize its logic there.

</br>

**Types file**

In this file we put every enum, interface and type we require for the other
files to work properly.
Remember to follow the convention ([here](#enums,-interfaces-and-types))!

</br>

**Test files**

There won't be a specific file for testing, but rather a folder that will host
them. The folder will be called `__tests__` and the goal is to keep tests as
close to the component as possible. With that, we expect maintenance to be
easier and straight forward. More on testing later.

</br>

**TSX file**

This is the main file where the component/screen is defined. Our goal is to
make these components as representational and clean as possible, for easier
readability and maintenance. This file will connect everything that is defined
in the others, to make the component work.

</br>

**Styles**

Styles won't have its separated file and will live next to component's
definition. This is due our linter that can only help us out detecting unused
styles if they are defined next to the point of use.

Our convention is to name the object as `styles` and for themed versions,
`createStyles`. It is a good practice to name the returned object of
`createStyles` so that the linter can match the unused styles. To do so, you
can do:

```ts
export const createStyles = (theme: ITheme) => {
  const styles = {
    ....
  };
  return styles;
};
```

If a style is a sub-style of another, we generally extract it as a generic style
(i.e. `horizontalPadding: {paddingHorizontal: 10}`) and we concatenate them
afterwards in the component:

```ts
... style={[styles.horizontalPadding, styles.container]} />
```

This is decided to keep style sheets small and maximizing the reutilization of
them instead of having multiple atomic styles that are used only once.

</br>

### Components Folder

Components should follow this convention
```js
/Component
   - `__tests__`
      - Component.spec.ts
      - Component.test.ts
      - ...
   - Component.hooks.ts
   - Component.strings.ts
   - Component.tsx
   - Component.types.ts
```

### Screen Folder

The screen should follow this convention.

```js
/Screen
    /components
   - `__tests__`
      - Screen.spec.ts
      - Screen.test.ts
      - ...
   - Screen.hooks.ts
   - Screen.styles.ts
   - Screen.tsx
   - Screen.types.ts
```

If the screen has components that are not used anywhere else, they should live
in its folder. But always try to avoid this as we are pushing for an atomic
design.

<br>

## Documents

As a default, documentation should be written on `/docs`. With that, we can
create our design documents and other related documentation, having them
available for everyone that has access to the repository.

<br>

## Spikes

_Spikes are initial implementations of features to determine risks and assess
how to the actual implementation will be tackled._

Spikes must be placed inside the `/spikes` folder. Every spike must have its
own folder with a **README.md** file composed of the following sections:

- **Overview:** Purpose of the spike.
- **{Tool/Library/Framework}:** Replace this title by the name of the tool/library/framework being tested and complete with information and links.
- **Running the spike**
  - **Prerequisites:** List of necessary tools to run the spike.
  - **Steps:** Step-by-step guide on how to run the spike.
- **Conclusion:** Conclusion on whether its convenient to implement the tool within the system or not.

## Atomic Design

[Atomic design](https://bradfrost.com/blog/post/atomic-web-design/), developed
by Brad Frost and Dave Olsen, is a methodology for crafting design systems with
five fundamental building blocks, which, when combined, promote consistency,
modularity, and scalability. In this project we only use 3 at the moment.

### Atoms

Atoms are the smallest possible components, such as buttons, labels, inputs,
animations, and fonts. They can be applied on any context, globally or within
other components.

### Molecules

They are the composition of one or more components of atoms. Here we begin to
compose complex components and reuse some of those components. Molecules can
have their own properties and create functionalities by using atoms, which may
not have any function or action by themselves.

### Organisms

Organisms are the combination of molecules that work together or even with
atoms that compose more elaborate interfaces. At this level, the components
begin to have the final shape, but they are still ensured to be independent,
portable and reusable enough to be reusable in any content.

<br>
<br>

# Version Control

##Branch Names

The branch name must have the following structure:

`{TYPE}/{feature-description}`

The **TYPE** can be one of:

- **build** "Build system", new build of the system
- **chore** "Chore", update of grunt tasks, etc.; no prod code changes
- **devops** "DevOps", changes to devops related tasks
- **docs** "Documentation", changes to documentation
- **feat** "Features", new features
- **fix** "Bug fixes", new bug fixes
- **perf** "Performance", changes to improve performance
- **refactor** "Refactor", refactor of production code
- **style** "Style", formatting, etc.; no prod code changes
- **spike** "Spike", code for analysis risks or sandbox implementations
- **test** "Testing", add missing tests or refactor; no prod code changes

Examples:

- `docs/parsing-functions`
- `feat/new-amazing-feature`
- `fix/ui-flickering-bug`

<br>

## Branches Lifetime

Every branch that has already been integrated into the source branch, must be
deleted both locally and remotely, to avoid branch cluttering.

<br>

## Integration

When integrating changes from one branch into another, always use **rebase**
instead of **merge**. The purpose is to keep a linear (and clearer) commit
history.

<br>

## Commits

Commits should be small and atomic. For more information about commits best
practices, please head to [this page](https://deepsource.io/blog/git-best-practices/).

<br>

## Commit Messages

Commit messages should comply with the following rules, based on the
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) convention:

1. Message length must have no more than 100 characters
2. Commit title must be lowercase
3. Commit title must not end with a period
4. Commit title must have the following structure: **type(optional-scope): description**

**Scope**

The scope identifies the EPIC user story to which the change introduced in
the commit is associated. In short, the overall topic of the feature it is
modifying.

This element is _optional_ in the commit title, but recommended.

**Type**

The type identifies the type of change introduced in the commit, and it can
be [any of the ones specified for branches](#branch-names).

**Examples**

Below you can find some examples of correct commit messages:

```shell
git commit -m "docs: add contributing guidelines document"
```

```shell
git commit -m "fix(endpoints): validation issue on users endpoint"
```

```shell
git commit -m "style(login): update login view to apply styling"
```

<br>

