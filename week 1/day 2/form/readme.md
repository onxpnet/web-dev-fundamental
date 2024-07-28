# HTML Form Example

## Overview

This project demonstrates a basic HTML form. Forms are used to collect user input and can include various input elements such as text fields, radio buttons, checkboxes, and submit buttons.

## HTML Code

The following HTML code creates a simple form with different types of input elements:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Form Example</title>
</head>
<body>
    <h1>Contact Us</h1>
    <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone">

        <label for="subject">Subject:</label>
        <select id="subject" name="subject">
            <option value="inquiry">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
        </select>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
    </form>
</body>
</html>
```

# HTML Form Example

## Explanation

- **`<form>`**: The container for all form elements. The `action` attribute specifies where to send the form data when the form is submitted. The `method` attribute specifies the HTTP method (e.g., `post` or `get`) used when sending form data.

- **`<label>`**: Defines a label for an input element. The `for` attribute associates the label with a specific input field.

- **`<input>`**: Used to create various types of input fields.
  - `type="text"`: For single-line text input.
  - `type="email"`: For email addresses.
  - `type="tel"`: For telephone numbers.

- **`<select>`**: Creates a dropdown list. The `<option>` elements define the options within the dropdown.

- **`<textarea>`**: For multi-line text input.

- **`<button>`**: Defines a clickable button. The `type="submit"` attribute specifies that this button will submit the form.

## Usage

1. Copy the HTML code into a file with a `.html` extension (e.g., `form.html`).
2. Open the file in a web browser to view and interact with the form.

## Customization

- **Form Action**: Update the `action` attribute of the `<form>` tag to point to your form processing script or URL.
- **Form Fields**: Add, remove, or modify form fields according to your requirements.
- **Styling**: Adjust the CSS in the `<style>` block to match your design preferences.