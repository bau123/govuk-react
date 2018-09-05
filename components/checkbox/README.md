Checkbox
========

### Import
```js
  import Checkbox from '@govuk-react/checkbox';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Checkbox list={arraylist} />
```

With disabled state
```jsx
<Checkbox disabled="disabled" list={arraylist} />
```

Checkbox preselected
```jsx
<Checkbox defaultChecked list={arraylist} />
```

Checkbox preselected & disabled
```jsx
<Checkbox disabled="disabled" defaultChecked list={arraylist} />
```
### References:

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `list` | true | []| node | Array of text content for checkbox
 `className` |  | ```undefined``` | string | CSS Classname for outermost container


