# Learning HTML Table

## Overview

This project includes a simple HTML table designed for displaying a learning schedule. It demonstrates how to create a table using HTML and apply basic CSS styling to enhance readability.

## HTML Code

The following HTML code defines a table with columns for the date, topic, description, and duration of each learning session:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning Table</title>
</head>
<body>
    <h1>Learning Schedule</h1>
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Topic</th>
                <th>Description</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2024-07-30</td>
                <td>HTML Basics</td>
                <td>Introduction to HTML and its elements</td>
                <td>1 hour</td>
            </tr>
            <tr>
                <td>2024-07-31</td>
                <td>CSS Styling</td>
                <td>Understanding CSS selectors and properties</td>
                <td>1.5 hours</td>
            </tr>
            <tr>
                <td>2024-08-01</td>
                <td>JavaScript Fundamentals</td>
                <td>Basics of JavaScript programming</td>
                <td>2 hours</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```