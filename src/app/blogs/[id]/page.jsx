// "use client"
import React from 'react';

const BlogDetailsPage = ({params}) => {
    console.log(params);

    const blogs = [
        {
          id: 100001,
          title: "Introduction to JSON",
          type: "Article",
          description:
            "This article provides a comprehensive introduction to JSON (JavaScript Object Notation). It covers the basic syntax and structure of JSON, explaining how it is used for data interchange between servers and web applications. You'll learn about key-value pairs, arrays, and how JSON is used in various programming contexts.",
        },
        {
          id: 100002,
          title: "Advanced JSON Parsing",
          type: "Article",
          description:
            "Dive deep into advanced techniques for parsing JSON data. This article explores methods for handling complex JSON structures, performance considerations, and best practices for working with large JSON datasets. Topics include efficient parsing, transformation, and serialization of JSON data in modern applications.",
        },
        {
          id: 100003,
          title: "JSON vs XML",
          type: "Comparison",
          description:
            "This comparison article examines the key differences between JSON and XML as data formats. It discusses their respective advantages, disadvantages, and use cases, providing insights into scenarios where one format might be preferred over the other. The article also includes performance benchmarks and real-world examples.",
        },
        {
          id: 100004,
          title: "Building APIs with JSON",
          type: "Tutorial",
          description:
            "A step-by-step tutorial on creating RESTful APIs using JSON. It covers the fundamentals of API design, including endpoint creation, HTTP methods, and status codes. The tutorial includes practical examples and code snippets to help you build and test a fully functional JSON-based API using popular frameworks.",
        },
        {
          id: 100005,
          title: "Understanding JSON Schema",
          type: "Article",
          description:
            "This article introduces JSON Schema, a powerful tool for validating JSON data. It explains the core concepts of JSON Schema, including defining and validating data structures, creating custom schemas, and integrating validation into your applications. Examples and use cases demonstrate how JSON Schema ensures data integrity.",
        },
        {
          id: 100006,
          title: "Best Practices for JSON",
          type: "Guide",
          description:
            "A comprehensive guide to best practices for working with JSON. Topics include formatting conventions, naming standards, and strategies for handling large JSON files. The guide also covers security considerations, such as preventing injection attacks, and tips for optimizing JSON for performance and readability.",
        },
        {
          id: 100007,
          title: "JSON Data Structures",
          type: "Article",
          description:
            "Explore the various data structures used in JSON, including objects, arrays, and nested structures. This article provides an in-depth look at how these structures can be used to represent complex data relationships. Examples demonstrate how to model and manipulate different types of data in JSON format.",
        },
        {
          id: 100008,
          title: "Securing JSON APIs",
          type: "Guide",
          description:
            "Learn about the best practices for securing APIs that utilize JSON for data exchange. This guide covers authentication, authorization, and encryption techniques to protect data transmitted through JSON APIs. It also discusses common security vulnerabilities and how to mitigate them to ensure the safety of your API endpoints.",
        },
        {
          id: 100009,
          title: "Handling JSON Errors",
          type: "Article",
          description:
            "An article focused on the common errors encountered when working with JSON and how to handle them effectively. It includes tips for debugging JSON parsing issues, resolving data format mismatches, and ensuring error resilience in your applications. Real-world examples illustrate common pitfalls and their solutions.",
        },
        {
          id: 100010,
          title: "JSON in Web Development",
          type: "Tutorial",
          description:
            "A practical tutorial on using JSON for client-server communication in web applications. It covers how to fetch and send JSON data using AJAX and Fetch API, handle JSON responses, and integrate JSON with frontend frameworks. The tutorial includes code samples and practical tips for building interactive web applications with JSON.",
        },
      ];
  
    const singleBlog=blogs.find((blog)=>blog.id==params.id);
    console.log(singleBlog);
    return (
        <div>
            <h5>{singleBlog.title}</h5>
            <p>{singleBlog.description}</p>
        </div>
    );
};

export default BlogDetailsPage;
