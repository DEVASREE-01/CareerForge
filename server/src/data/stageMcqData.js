// Master MCQ Dataset for Stage Assessments across all CareerForge Roles
// Curated questions with correct answers, explanations, and topic tagging for adaptive assessment.

export const mcqDatabase = {
  "Cloud Engineer": {
    "cloud-foundations": [
      {
        "question": "Which command recursively changes file ownership in Linux?",
        "options": [
          "chmod -R",
          "chown -R",
          "chgrp -R",
          "passwd -R"
        ],
        "answer": 1,
        "explanation": "chown -R changes user and group ownership of directories and their contents recursively.",
        "topic": "Linux"
      },
      {
        "question": "What is the default port for secure shell (SSH) communication?",
        "options": [
          "21",
          "22",
          "80",
          "443"
        ],
        "answer": 1,
        "explanation": "SSH uses port 22 by default for encrypted command-line management.",
        "topic": "Networking"
      },
      {
        "question": "Which tool traces network routing hops and packet latency?",
        "options": [
          "ping",
          "traceroute",
          "netstat",
          "ifconfig"
        ],
        "answer": 1,
        "explanation": "traceroute maps the route packets take to reach a network host.",
        "topic": "Networking"
      },
      {
        "question": "What does a /24 subnet mask (255.255.255.0) represent?",
        "options": [
          "256 total IP addresses (254 usable)",
          "16 million host addresses",
          "A Class A network",
          "A private Loopback network"
        ],
        "answer": 0,
        "explanation": "/24 provides 2^(32-24) = 256 addresses, minus network and broadcast addresses = 254 usable hosts.",
        "topic": "Networking"
      },
      {
        "question": "Which Linux signal is sent by \"kill -9 <PID>\"?",
        "options": [
          "SIGTERM",
          "SIGINT",
          "SIGKILL",
          "SIGHUP"
        ],
        "answer": 2,
        "explanation": "SIGKILL (9) immediately terminates a process and cannot be caught or ignored.",
        "topic": "Linux"
      },
      {
        "question": "What is the purpose of the OSI Layer 4 (Transport Layer)?",
        "options": [
          "Physical bit transmission",
          "End-to-end communication and flow control (TCP/UDP)",
          "Routing packets across networks",
          "Data formatting and encryption"
        ],
        "answer": 1,
        "explanation": "Transport Layer provides transparent transfer of data between end users (TCP/UDP).",
        "topic": "Networking"
      }
    ],
    "cloud-fundamentals": [
      {
        "question": "Which AWS service provides secure identity and permission management?",
        "options": [
          "EC2",
          "S3",
          "IAM",
          "CloudWatch"
        ],
        "answer": 2,
        "explanation": "AWS IAM controls authentication and authorization for AWS resources.",
        "topic": "AWS"
      },
      {
        "question": "What architectural principle ensures high availability across physical data center outages?",
        "options": [
          "Single-AZ deployment",
          "Multi-AZ replication",
          "Single large EC2 instance",
          "Local EBS backups"
        ],
        "answer": 1,
        "explanation": "Deploying across multiple Availability Zones isolates applications from single data center failures.",
        "topic": "AWS"
      },
      {
        "question": "Which AWS service is a managed Content Delivery Network (CDN)?",
        "options": [
          "CloudFront",
          "Route 53",
          "VPC",
          "Direct Connect"
        ],
        "answer": 0,
        "explanation": "Amazon CloudFront caches and serves content at edge locations worldwide with low latency.",
        "topic": "AWS"
      },
      {
        "question": "What is the primary characteristic of Cloud Elasticity?",
        "options": [
          "Fixed monthly pricing",
          "Ability to automatically scale resources dynamically matching load",
          "Manual hardware provisioning",
          "Always using 100% capacity"
        ],
        "answer": 1,
        "explanation": "Elasticity allows a system to dynamically allocate and deallocate resources according to demand.",
        "topic": "AWS"
      }
    ],
    "aws-core": [
      {
        "question": "Which AWS storage service provides low-latency block volumes for EC2?",
        "options": [
          "S3",
          "EFS",
          "EBS",
          "Glacier"
        ],
        "answer": 2,
        "explanation": "Amazon EBS provides persistent block storage volumes tailored for EC2 instances.",
        "topic": "AWS"
      },
      {
        "question": "In AWS VPC, which component enables outbound internet access for private subnets without allowing inbound connections?",
        "options": [
          "Internet Gateway",
          "NAT Gateway",
          "Virtual Private Gateway",
          "VPC Peering"
        ],
        "answer": 1,
        "explanation": "A NAT Gateway translates private subnet traffic to the internet while shielding instances from inbound connections.",
        "topic": "Networking"
      },
      {
        "question": "What AWS service acts as a scalable Domain Name System (DNS)?",
        "options": [
          "Route 53",
          "CloudWatch",
          "CloudTrail",
          "IAM"
        ],
        "answer": 0,
        "explanation": "Amazon Route 53 is a highly available and scalable cloud DNS web service.",
        "topic": "AWS"
      },
      {
        "question": "What is the key difference between Security Groups and NACLs in AWS?",
        "options": [
          "Security groups are stateful; NACLs are stateless",
          "Security groups are stateless; NACLs are stateful",
          "Security groups operate at subnet level",
          "NACLs operate at instance level"
        ],
        "answer": 0,
        "explanation": "Security Groups evaluate traffic at the instance level statefully, whereas NACLs evaluate traffic at the subnet level statelessly.",
        "topic": "Networking"
      }
    ],
    "cloud-automation": [
      {
        "question": "Which Terraform command reads current configuration and builds a state execution plan?",
        "options": [
          "terraform init",
          "terraform plan",
          "terraform apply",
          "terraform destroy"
        ],
        "answer": 1,
        "explanation": "terraform plan creates an execution plan, previewing what resources will be created, updated, or destroyed.",
        "topic": "Terraform"
      },
      {
        "question": "What Docker instruction specifies the default command executed when a container starts?",
        "options": [
          "RUN",
          "CMD",
          "EXPOSE",
          "COPY"
        ],
        "answer": 1,
        "explanation": "CMD provides defaults for an executing container, which can be overridden at runtime.",
        "topic": "Docker"
      },
      {
        "question": "What is the primary role of a CI/CD pipeline in modern cloud delivery?",
        "options": [
          "Format raw text files",
          "Automate testing, container building, and zero-downtime deployment",
          "Host PostgreSQL databases",
          "Monitor server physical fans"
        ],
        "answer": 1,
        "explanation": "CI/CD ensures rapid, automated, and reliable code integration and deployment to production.",
        "topic": "CI/CD"
      },
      {
        "question": "Where does Terraform store the mapping between declared resources and real cloud infrastructure?",
        "options": [
          "In Git commits",
          "In the terraform.tfstate file / remote backend",
          "In Docker images",
          "In AWS CloudTrail logs"
        ],
        "answer": 1,
        "explanation": "Terraform relies on state files to track real infrastructure IDs, metadata, and dependencies.",
        "topic": "Terraform"
      }
    ],
    "cloud-project": [
      {
        "question": "When deploying a containerized microservice on AWS ECS Fargate, what manages the container infrastructure?",
        "options": [
          "You manage EC2 instances directly",
          "AWS manages the underlying server provisioning and patching serverlessly",
          "Containers run locally on the developer laptop",
          "A single shared S3 bucket"
        ],
        "answer": 1,
        "explanation": "AWS Fargate runs containers serverlessly without needing to provision or manage EC2 instances.",
        "topic": "AWS"
      },
      {
        "question": "Which AWS service provides automated blue/green traffic shifting and zero-downtime container deployments?",
        "options": [
          "AWS CodeDeploy with ALB listener rule shifting",
          "Amazon S3",
          "AWS Glue",
          "Amazon SNS"
        ],
        "answer": 0,
        "explanation": "AWS CodeDeploy coordinates with Application Load Balancers to shift traffic smoothly between blue and green target groups.",
        "topic": "CI/CD"
      }
    ],
    "cloud-interview": [
      {
        "question": "How do you design a disaster recovery strategy with an RPO of under 5 minutes and RTO under 15 minutes?",
        "options": [
          "Tape backups shipped weekly",
          "Multi-region warm standby or active-active replication with Route 53 health-checked failover",
          "Single AZ automated snapshots daily",
          "Manual server reinstallation"
        ],
        "answer": 1,
        "explanation": "Low RPO/RTO requires continuous asynchronous data replication across regions with automated DNS failover.",
        "topic": "Cloud architecture"
      },
      {
        "question": "What is the principle of least privilege in cloud IAM architecture?",
        "options": [
          "Grant administrator access to all developers",
          "Grant only the minimum necessary permissions required to complete the specific job function",
          "Use root account for all service deployments",
          "Disable MFA for convenience"
        ],
        "answer": 1,
        "explanation": "Least privilege reduces security blast radius by strictly constraining credentials to necessary actions and resources.",
        "topic": "IAM"
      }
    ]
  },
  "Full Stack Developer": {
    "web-js": [
      {
        "question": "What is the difference between \"==\" and \"===\" in JavaScript?",
        "options": [
          "\"==\" compares value with type coercion; \"===\" compares both value and type strictly",
          "There is no difference",
          "\"===\" converts strings to numbers",
          "\"==\" only works with booleans"
        ],
        "answer": 0,
        "explanation": "The strict equality operator (===) checks value and type without performing implicit type conversion.",
        "topic": "JavaScript"
      },
      {
        "question": "What is the output of typeof null in JavaScript?",
        "options": [
          "\"null\"",
          "\"undefined\"",
          "\"object\"",
          "\"number\""
        ],
        "answer": 2,
        "explanation": "In JavaScript, typeof null returns \"object\" due to a historical legacy bug in the original language specification.",
        "topic": "JavaScript"
      },
      {
        "question": "Which CSS layout system is designed specifically for two-dimensional grid layouts?",
        "options": [
          "Flexbox",
          "CSS Grid",
          "Float",
          "Inline-block"
        ],
        "answer": 1,
        "explanation": "CSS Grid provides a two-dimensional grid-based layout system with columns and rows.",
        "topic": "HTML & CSS"
      },
      {
        "question": "What does Event Bubbling mean in the JavaScript DOM hierarchy?",
        "options": [
          "Events start at the target element and propagate upwards through ancestor elements to the root",
          "Events only trigger on the body element",
          "Events are cancelled immediately after invocation",
          "Events fire in reverse alphabetical order"
        ],
        "answer": 0,
        "explanation": "Event bubbling triggers handlers on the clicked target first, then bubbles upward through parent nodes in the DOM.",
        "topic": "JavaScript"
      }
    ],
    "react-frontend": [
      {
        "question": "Why must React Hooks only be called at the top level of a component?",
        "options": [
          "To prevent infinite CSS reloads",
          "Because React relies on call order to persist state between renders",
          "Because JavaScript forbids functions inside conditionals",
          "To make code look cleaner"
        ],
        "answer": 1,
        "explanation": "React preserves hook state across renders based strictly on the sequential order in which hooks are invoked.",
        "topic": "React"
      },
      {
        "question": "What is the key benefit of the Virtual DOM in React?",
        "options": [
          "It replaces HTML completely with binary code",
          "It diffs changes in-memory and performs batched, minimal updates to the real DOM",
          "It speeds up network HTTP transfers",
          "It runs backend database queries"
        ],
        "answer": 1,
        "explanation": "The Virtual DOM computes the minimal set of required DOM mutations via reconciliation before touching the real browser DOM.",
        "topic": "React"
      },
      {
        "question": "When does useEffect with an empty dependency array [] execute?",
        "options": [
          "On every render",
          "Only once after the component mounts",
          "Whenever any state variable changes",
          "Right before the component unmounts only"
        ],
        "answer": 1,
        "explanation": "An empty dependency array indicates that the effect has no reactive dependencies, so it runs once after initial mount.",
        "topic": "React"
      },
      {
        "question": "How do you avoid unnecessary child component re-renders when passing callback functions in React?",
        "options": [
          "Wrap callback in useCallback and wrap child component in React.memo",
          "Use var instead of const",
          "Remove props from child component",
          "Call forceUpdate()"
        ],
        "answer": 0,
        "explanation": "useCallback stabilizes function references across renders, enabling React.memo to skip re-rendering the child.",
        "topic": "React"
      }
    ],
    "backend-apis": [
      {
        "question": "What HTTP status code represents a successful resource creation?",
        "options": [
          "200 OK",
          "201 Created",
          "204 No Content",
          "301 Moved Permanently"
        ],
        "answer": 1,
        "explanation": "HTTP 201 signifies that the request succeeded and a new resource was created as a result.",
        "topic": "REST APIs"
      },
      {
        "question": "What is the primary role of Express.js middleware functions?",
        "options": [
          "Render CSS animations",
          "Access request and response objects to execute code, validate inputs, or end request-response cycles",
          "Compress hard drive sectors",
          "Compile C++ binaries"
        ],
        "answer": 1,
        "explanation": "Middleware functions execute sequentially in the request pipeline, handling tasks like authentication, logging, and body parsing.",
        "topic": "Node.js"
      },
      {
        "question": "What is the purpose of CORS (Cross-Origin Resource Sharing)?",
        "options": [
          "A browser security mechanism that controls resource access across differing domains/ports",
          "A database indexing strategy",
          "A protocol for sending WebSocket frames",
          "An encryption cipher for passwords"
        ],
        "answer": 0,
        "explanation": "CORS uses HTTP headers to tell browsers whether a web app running at one origin has permission to access resources from a different origin.",
        "topic": "REST APIs"
      }
    ],
    "data-auth": [
      {
        "question": "Which part of a JSON Web Token (JWT) contains user claims and token expiration data?",
        "options": [
          "Header",
          "Payload",
          "Signature",
          "Secret"
        ],
        "answer": 1,
        "explanation": "The payload contains claims—statements about the user and additional metadata such as exp, iat, and sub.",
        "topic": "Authentication"
      },
      {
        "question": "Why should passwords never be stored using standard SHA-256 without salt and key stretching?",
        "options": [
          "SHA-256 is too slow",
          "Fast cryptographic hashes are vulnerable to precomputed rainbow table attacks and GPU brute forcing",
          "SHA-256 outputs invalid ASCII characters",
          "SHA-256 cannot hash long passwords"
        ],
        "answer": 1,
        "explanation": "Bcrypt or Argon2 uses salt and configurable work factors to make brute force attacks computationally infeasible.",
        "topic": "Authentication"
      },
      {
        "question": "In MongoDB, what operation is equivalent to a SQL JOIN?",
        "options": [
          "$match",
          "$lookup",
          "$project",
          "$group"
        ],
        "answer": 1,
        "explanation": "$lookup performs a left outer join to an unsharded collection in the same database to filter in documents from the \"joined\" collection.",
        "topic": "MongoDB"
      }
    ],
    "fullstack-project": [
      {
        "question": "In a production full stack application, where should sensitive API secrets and database passwords be stored?",
        "options": [
          "Hardcoded in client JavaScript bundle",
          "In environment variables on the backend server",
          "In public GitHub repositories",
          "In localStorage of the user browser"
        ],
        "answer": 1,
        "explanation": "Secrets must reside securely in server environment variables or secret management vaults (e.g. AWS Secrets Manager).",
        "topic": "Authentication"
      },
      {
        "question": "What is database connection pooling and why is it essential for high-concurrency Node.js backends?",
        "options": [
          "Deleting idle databases",
          "Reusing a cache of established database connections to avoid TCP handshake overhead on every query",
          "Connecting to 50 databases simultaneously",
          "Running database queries in the browser"
        ],
        "answer": 1,
        "explanation": "Connection pooling maintains reusable open connections, preventing connection exhaustion and reducing query latency.",
        "topic": "SQL"
      }
    ],
    "fullstack-interview": [
      {
        "question": "How do you optimize an application that experiences a sudden spike in database read latency?",
        "options": [
          "Delete old user accounts",
          "Implement Redis caching for high-frequency read queries and add appropriate database indexes",
          "Switch all queries to SELECT *",
          "Turn off database authentication"
        ],
        "answer": 1,
        "explanation": "Adding an in-memory caching layer (Redis) and optimizing database indexes directly alleviates read contention on primary storage.",
        "topic": "Databases"
      },
      {
        "question": "How do you prevent Cross-Site Scripting (XSS) in modern web applications?",
        "options": [
          "Use raw innerHTML everywhere",
          "Sanitize user input, encode output, use frameworks with automatic escaping like React, and set Content-Security-Policy (CSP)",
          "Disable HTTPS",
          "Use cookies without HttpOnly"
        ],
        "answer": 1,
        "explanation": "Preventing XSS requires output encoding, escaping user input, and configuring strict Content-Security-Policy headers.",
        "topic": "Authentication"
      }
    ]
  },
  "Frontend Developer": {
    "frontend-foundations": [
      {
        "question": "What is the purpose of semantic HTML elements like <article>, <section>, and <nav>?",
        "options": [
          "They make the website look colorful automatically",
          "They provide meaningful structure to assistive technologies, search engines, and browsers",
          "They load faster than <div> elements",
          "They eliminate the need for CSS"
        ],
        "answer": 1,
        "explanation": "Semantic elements convey the purpose and structure of web content to screen readers, accessibility APIs, and search engine crawlers.",
        "topic": "HTML & CSS"
      },
      {
        "question": "In CSS box model, which property determines whether width and height include padding and borders?",
        "options": [
          "display",
          "box-sizing",
          "overflow",
          "position"
        ],
        "answer": 1,
        "explanation": "box-sizing: border-box includes padding and border in the element’s total specified width and height.",
        "topic": "HTML & CSS"
      },
      {
        "question": "What is the difference between CSS Flexbox and CSS Grid?",
        "options": [
          "Flexbox is 1-dimensional (row OR column); Grid is 2-dimensional (rows AND columns simultaneously)",
          "Flexbox is only for mobile; Grid is for desktop",
          "Grid cannot handle responsive layouts",
          "There is no difference"
        ],
        "answer": 0,
        "explanation": "Flexbox arranges items along a single axis, whereas Grid handles complex two-dimensional spatial layouts with tracks and areas.",
        "topic": "HTML & CSS"
      },
      {
        "question": "What does the WCAG accessibility standard require for the \"alt\" attribute on meaningful <img> elements?",
        "options": [
          "It must always be left empty",
          "It must provide an accurate text alternative describing the image content or purpose",
          "It must contain the image file size",
          "It must contain CSS classes"
        ],
        "answer": 1,
        "explanation": "Meaningful images require descriptive alt text so visually impaired users using screen readers receive the same context.",
        "topic": "Accessibility"
      }
    ],
    "js-core": [
      {
        "question": "What is the Event Loop in JavaScript and how does it handle asynchronous code?",
        "options": [
          "A while(true) loop running in C++",
          "A single-threaded mechanism that processes synchronous tasks on the Call Stack and pulls asynchronous callbacks from Task/Microtask Queues when the stack is empty",
          "A multi-threaded CPU timer",
          "A browser plugin"
        ],
        "answer": 1,
        "explanation": "The Event Loop monitors the call stack and event queue, pushing queued tasks to the stack once current synchronous execution completes.",
        "topic": "JavaScript"
      },
      {
        "question": "What is the Temporal Dead Zone (TDZ) in JavaScript ES6?",
        "options": [
          "The time it takes for an API to timeout",
          "The period between entering a block scope and the actual variable declaration of let/const, where accessing the variable throws ReferenceError",
          "A deprecated browser mode",
          "The garbage collection pause"
        ],
        "answer": 1,
        "explanation": "let and const variables exist in a TDZ from their scope entrance until declaration execution; accessing them before initialization causes ReferenceError.",
        "topic": "JavaScript"
      },
      {
        "question": "What is the primary difference between a Promise and an async/await function?",
        "options": [
          "async/await is syntactic sugar over Promises that allows writing asynchronous code in a linear, readable synchronous-like fashion",
          "Promises run on a separate CPU core",
          "async/await does not return a Promise",
          "Promises cannot handle errors"
        ],
        "answer": 0,
        "explanation": "async/await wraps Promise execution in clean synchronous syntax with try/catch error handling while preserving asynchronous execution.",
        "topic": "JavaScript"
      },
      {
        "question": "How does event delegation work and why is it advantageous for large lists?",
        "options": [
          "Attaching a single event listener to a parent element and utilizing event bubbling to handle child clicks, reducing memory overhead",
          "Attaching listeners to every individual list item",
          "Delegating events to a web worker",
          "Running events on page load"
        ],
        "answer": 0,
        "explanation": "Event delegation leverages event bubbling to handle dynamic child elements with a single listener on an ancestor container.",
        "topic": "JavaScript"
      }
    ],
    "react-ecosystem": [
      {
        "question": "What is the difference between React state and props?",
        "options": [
          "Props are mutable inside the component; state is read-only",
          "State is internal component-managed data; props are parameters passed down from a parent component",
          "State is shared globally by default; props are local",
          "There is no functional difference"
        ],
        "answer": 1,
        "explanation": "Props are external inputs passed from parent to child (read-only); state is internal mutable data managed by the component itself.",
        "topic": "React"
      },
      {
        "question": "What problem does the React Context API solve, and what is its primary performance caveat?",
        "options": [
          "It replaces Redux for server queries; caveat is network latency",
          "It avoids prop drilling across deep component trees; caveat is that all consuming components re-render whenever the context value changes",
          "It renders SVGs; caveat is CPU usage",
          "It creates database tables"
        ],
        "answer": 1,
        "explanation": "Context eliminates passing props through intermediary components, but updating context triggers re-renders on all subscribing consumers unless carefully memoized.",
        "topic": "React"
      },
      {
        "question": "In TypeScript with React, what is the difference between React.ReactNode and React.ReactElement?",
        "options": [
          "ReactNode encompasses anything renderable (elements, strings, numbers, fragments, null); ReactElement is strictly an instantiated JSX element object",
          "They are exact aliases",
          "ReactElement can only be a string",
          "ReactNode cannot be used in return types"
        ],
        "answer": 0,
        "explanation": "ReactNode is the broadest type representing any valid JSX render output; ReactElement is a typed object with type and props.",
        "topic": "TypeScript"
      }
    ],
    "frontend-perf": [
      {
        "question": "What are Core Web Vitals (LCP, FID/INP, CLS)?",
        "options": [
          "CSS frameworks",
          "Google standardized performance metrics measuring Largest Contentful Paint, Interactivity, and Cumulative Layout Shift",
          "Server CPU metrics",
          "Database benchmark scores"
        ],
        "answer": 1,
        "explanation": "Core Web Vitals measure loading speed (LCP), user responsiveness (INP/FID), and visual stability (CLS) for optimal real-world user experience.",
        "topic": "Frontend Performance"
      },
      {
        "question": "How does React.lazy and dynamic import() optimize bundle delivery?",
        "options": [
          "They compress HTML tags",
          "They enable route-based code splitting, loading JavaScript chunks on-demand rather than shipping a single monolithic initial bundle",
          "They minify CSS variables",
          "They cache assets in IndexedDB automatically"
        ],
        "answer": 1,
        "explanation": "Code splitting breaks large applications into asynchronous chunks, drastically reducing initial JavaScript parse and execution time.",
        "topic": "Frontend Performance"
      },
      {
        "question": "What is the purpose of testing user interactions using React Testing Library (RTL)?",
        "options": [
          "To test private component state variables",
          "To test software the way real users interact with it (by role, text, label) rather than implementation details",
          "To verify CSS hex colors",
          "To test database socket connections"
        ],
        "answer": 1,
        "explanation": "RTL encourages querying elements by accessible user-facing attributes (accessible names, roles) to ensure robust test suites that resist refactoring breakage.",
        "topic": "Testing"
      }
    ],
    "frontend-project": [
      {
        "question": "When implementing infinite scrolling or virtualization in large lists, why is DOM virtualization (e.g. react-window) necessary?",
        "options": [
          "To reduce network bandwidth",
          "To render only the visible DOM nodes in the viewport, preventing browser slowdown from thousands of active DOM nodes",
          "To enforce HTTPS",
          "To sort list items alphabetically"
        ],
        "answer": 1,
        "explanation": "Virtualization keeps DOM node count constant (~20 items) regardless of dataset size, maintaining 60 FPS scrolling performance.",
        "topic": "Frontend Performance"
      },
      {
        "question": "How does a Service Worker enable Offline-first Progressive Web Apps (PWAs)?",
        "options": [
          "It intercepts network requests and serves pre-cached static assets and API responses from CacheStorage",
          "It increases device Wi-Fi signal strength",
          "It compiles React code on the device GPU",
          "It deletes expired cookies"
        ],
        "answer": 0,
        "explanation": "Service Workers act as client-side network proxies, allowing granular caching strategies (stale-while-revalidate, cache-first) for offline resilience.",
        "topic": "Frontend Performance"
      }
    ],
    "frontend-interview": [
      {
        "question": "What happens in the browser from the moment a user types a URL in the address bar until the page is rendered on screen (Critical Rendering Path)?",
        "options": [
          "DNS resolution -> TCP handshake -> TLS negotiation -> HTTP request/response -> DOM & CSSOM construction -> Render Tree -> Layout -> Paint -> Compositing",
          "Browser downloads HTML and executes JavaScript immediately without layout",
          "Server sends a video stream of the website",
          "Operating system prints the screen buffer"
        ],
        "answer": 0,
        "explanation": "The Critical Rendering Path covers network resolution, document parsing to construct DOM/CSSOM, layout tree calculation, and GPU painting/compositing.",
        "topic": "DOM"
      },
      {
        "question": "How do you handle state synchronization across multiple browser tabs in a modern web application?",
        "options": [
          "Send emails between tabs",
          "Use the BroadcastChannel API or listen to the window \"storage\" event on localStorage",
          "Reload all tabs every 2 seconds",
          "It is impossible in browser architecture"
        ],
        "answer": 1,
        "explanation": "BroadcastChannel API and window storage event listeners allow zero-latency cross-tab pub/sub communication on the same origin.",
        "topic": "React"
      }
    ]
  },
  "Backend Developer": {
    "backend-foundations": [
      {
        "question": "How does Node.js handle thousands of concurrent I/O operations despite being single-threaded?",
        "options": [
          "It spawns a new OS thread for every request",
          "Through its non-blocking event-driven architecture and the Libuv thread pool for asynchronous system I/O",
          "It executes multiple JavaScript files simultaneously on different cores",
          "It uses hardware multi-threading automatically"
        ],
        "answer": 1,
        "explanation": "Libuv provides the event loop and background thread pool to offload heavy file/network I/O without blocking the JavaScript main thread.",
        "topic": "Node.js"
      },
      {
        "question": "What is the purpose of Node.js Streams and when should you use them over fs.readFile()?",
        "options": [
          "To format JSON strings",
          "To process massive files chunk-by-chunk in memory without loading the entire file into RAM at once",
          "To connect to CSS styles",
          "To run unit tests"
        ],
        "answer": 1,
        "explanation": "Streams transfer data in small buffer chunks, enabling high memory efficiency when streaming gigabyte-sized files or video content.",
        "topic": "Node.js"
      },
      {
        "question": "What is the difference between process.nextTick() and setImmediate() in the Node.js event loop?",
        "options": [
          "process.nextTick() executes immediately after the current operation before the event loop continues; setImmediate() runs in the Check phase",
          "They are exact aliases",
          "setImmediate() runs before promises",
          "process.nextTick() runs only on server startup"
        ],
        "answer": 0,
        "explanation": "process.nextTick() fires immediately after current synchronous code execution, preceding all macrotask phases and timers.",
        "topic": "Node.js"
      }
    ],
    "rest-apis": [
      {
        "question": "What makes an HTTP method idempotent in REST API architecture?",
        "options": [
          "It executes faster than 100ms",
          "Making multiple identical requests produces the exact same server state as a single request (e.g. GET, PUT, DELETE)",
          "It encrypts the payload",
          "It requires an API key"
        ],
        "answer": 1,
        "explanation": "Idempotence means that calling the endpoint N times has the same net side effect on server resources as calling it once.",
        "topic": "REST APIs"
      },
      {
        "question": "How does API rate limiting prevent Denial of Service (DoS) attacks?",
        "options": [
          "By deleting the server database",
          "By tracking request counts per client IP or token in memory/Redis and returning 429 Too Many Requests when thresholds are exceeded",
          "By blocking all international traffic",
          "By slowing down internet cables"
        ],
        "answer": 1,
        "explanation": "Rate limiting algorithms (Token Bucket, Leaky Bucket) meter incoming requests to protect backend services against abuse and exhaustion.",
        "topic": "REST APIs"
      },
      {
        "question": "What is the difference between Authentication (AuthN) and Authorization (AuthZ)?",
        "options": [
          "AuthN verifies WHO you are (identity); AuthZ verifies WHAT you are permitted to do (permissions/roles)",
          "AuthN is for databases; AuthZ is for frontend",
          "They are identical concepts",
          "AuthZ verifies passwords; AuthN assigns tokens"
        ],
        "answer": 0,
        "explanation": "Authentication establishes identity (login credentials); authorization checks whether that authenticated identity has permission to perform an action.",
        "topic": "Authentication"
      }
    ],
    "databases-storage": [
      {
        "question": "What are ACID properties in relational database transactions?",
        "options": [
          "Access, Control, Index, Deploy",
          "Atomicity, Consistency, Isolation, Durability",
          "Algorithm, Cache, Iteration, Data",
          "Async, Callback, Interval, Defer"
        ],
        "answer": 1,
        "explanation": "ACID guarantees that database transactions are processed reliably, completely, and isolated from concurrent transactions.",
        "topic": "SQL"
      },
      {
        "question": "Why does adding a database index speed up SELECT queries while slowing down high-throughput INSERT/UPDATE operations?",
        "options": [
          "Indexes compress table rows",
          "Indexes maintain auxiliary B-Tree/Hash data structures for fast lookups, which must be updated on every row insertion or modification",
          "Indexes lock the entire server",
          "Indexes disable transaction logs"
        ],
        "answer": 1,
        "explanation": "Indexes create fast search paths (like an index in a book), but each insert/update requires updating both the raw table and all associated indexes.",
        "topic": "SQL"
      },
      {
        "question": "When is a NoSQL document database (MongoDB) preferred over a Relational database (PostgreSQL)?",
        "options": [
          "When you require strict financial ACID guarantees across 50 normalized tables",
          "When dealing with rapidly evolving polymorphic schemas, hierarchical document hierarchies, or massive horizontal scale",
          "When you have zero RAM",
          "When you cannot write queries"
        ],
        "answer": 1,
        "explanation": "Document databases excel at nested hierarchical data models, rapid feature iteration with schema agility, and horizontal sharding.",
        "topic": "MongoDB"
      }
    ],
    "system-design": [
      {
        "question": "What is the difference between vertical scaling and horizontal scaling?",
        "options": [
          "Vertical scaling adds more CPU/RAM to a single existing server; horizontal scaling adds more server instances behind a load balancer",
          "Vertical is for databases; horizontal is for CSS",
          "Horizontal scaling always costs less",
          "Vertical scaling has zero hardware limits"
        ],
        "answer": 0,
        "explanation": "Vertical scaling (scale-up) increases single-node capacity; horizontal scaling (scale-out) distributes traffic across multiple nodes.",
        "topic": "System Design"
      },
      {
        "question": "How does an in-memory cache (Redis) reduce database load using the Cache-Aside pattern?",
        "options": [
          "The application checks Redis first; on a cache miss, it fetches from DB, writes to Redis, and returns the data to the client",
          "The database writes directly to the user browser",
          "Redis replaces the primary database entirely",
          "Cache-aside deletes all data on every read"
        ],
        "answer": 0,
        "explanation": "Cache-Aside checks the cache first; upon a miss, it queries source-of-truth storage, populates the cache with a TTL, and serves subsequent reads from cache.",
        "topic": "Caching"
      },
      {
        "question": "What problem do asynchronous message queues (RabbitMQ, Apache Kafka) solve in microservice architectures?",
        "options": [
          "They format HTML emails",
          "They decouple producers and consumers, buffer traffic spikes, and guarantee reliable asynchronous message delivery without blocking web threads",
          "They replace REST APIs completely",
          "They encrypt hard drive partitions"
        ],
        "answer": 1,
        "explanation": "Message queues decouple service communication, allowing asynchronous background processing and graceful handling of sudden traffic surges.",
        "topic": "System Design"
      }
    ],
    "backend-project": [
      {
        "question": "In a microservices architecture, what is the role of an API Gateway?",
        "options": [
          "Render React templates",
          "Act as a single reverse-proxy entry point providing routing, SSL termination, authentication, rate limiting, and request telemetry",
          "Host database tables",
          "Store static CSS assets"
        ],
        "answer": 1,
        "explanation": "An API Gateway centralizes cross-cutting concerns (auth, rate limiting, logging, routing) before forwarding requests to internal services.",
        "topic": "System Design"
      },
      {
        "question": "What is database connection pooling and how do you prevent connection starvation under peak load?",
        "options": [
          "Create an infinite number of connections",
          "Configure maximum pool size based on database capacity, set acquire timeouts, and ensure connections are immediately released back to the pool in finally blocks",
          "Never close any connections",
          "Restart the server every 10 minutes"
        ],
        "answer": 1,
        "explanation": "Careful pool sizing, connection timeouts, and leak prevention ensure connections are reused safely without overwhelming the database.",
        "topic": "SQL"
      }
    ],
    "backend-interview": [
      {
        "question": "How do you handle distributed transactions across multiple microservices where standard 2-Phase Commit (2PC) is impractical?",
        "options": [
          "Ignore data discrepancies",
          "Implement the Saga Pattern using choreographies or orchestrators with compensating transactions to rollback failures",
          "Run all microservices in a single SQL database",
          "Disable database writes on failure"
        ],
        "answer": 1,
        "explanation": "The Saga pattern breaks distributed transactions into a sequence of local transactions, triggering compensating transactions if any step fails.",
        "topic": "System Design"
      },
      {
        "question": "What is database connection pooling and what causes \"Connection Pool Exhaustion\" errors in production backends?",
        "options": [
          "Too many CSS files",
          "Unclosed connections in error paths, slow unindexed queries holding connections, or pool max size set lower than concurrent request volume",
          "Database running out of hard drive space",
          "Client disconnecting their Wi-Fi"
        ],
        "answer": 1,
        "explanation": "Exhaustion occurs when active requests acquire connections and fail to release them promptly due to slow queries or missing error cleanup.",
        "topic": "Databases"
      }
    ]
  },
  "MERN Stack Developer": {
    "mern-foundations": [
      {
        "question": "What is the role of each layer in the MERN stack (MongoDB, Express, React, Node)?",
        "options": [
          "React: UI; Node: runtime; Express: web server & routing; MongoDB: document database",
          "React: database; Node: UI; Express: styling; MongoDB: compiler",
          "All 4 layers do the exact same thing",
          "Node is a database; Express is a browser"
        ],
        "answer": 0,
        "explanation": "MERN is a pure JavaScript stack: React provides client UI, Express runs API routing on Node.js runtime, and MongoDB persists JSON-like data.",
        "topic": "JavaScript"
      },
      {
        "question": "What is the purpose of CORS middleware in an Express.js backend for a MERN application?",
        "options": [
          "To encrypt passwords in MongoDB",
          "To allow the React frontend running on port 3000/5173 to send HTTP requests to the Express server running on port 5000",
          "To compress images",
          "To compile TypeScript"
        ],
        "answer": 1,
        "explanation": "CORS configuration allows the browser to make cross-origin XMLHttpRequests/fetch requests from the frontend origin to the backend API origin.",
        "topic": "REST APIs"
      }
    ],
    "react-ui": [
      {
        "question": "In React, why is mutating state directly (e.g. state.items.push(newItem)) considered an anti-pattern?",
        "options": [
          "It causes a syntax error",
          "React uses shallow reference comparison; mutating state in-place does not create a new object reference, causing React to miss re-renders",
          "It slows down CSS transitions",
          "JavaScript forbids array push"
        ],
        "answer": 1,
        "explanation": "Immutability ensures new references are created on update, allowing React reconciliation to reliably detect state changes and schedule re-renders.",
        "topic": "React"
      },
      {
        "question": "How do you implement controlled components for forms in React?",
        "options": [
          "Let the DOM handle all input values via document.getElementById",
          "Bind the input value attribute to component state and update state via the onChange handler",
          "Use window.prompt()",
          "Store form inputs in local cookies"
        ],
        "answer": 1,
        "explanation": "Controlled components have their input values driven by React state, giving the component full control over validation and transformation.",
        "topic": "React"
      }
    ],
    "node-express": [
      {
        "question": "In Express, what is the required signature for an error-handling middleware?",
        "options": [
          "(req, res)",
          "(err, req, res, next)",
          "(req, res, next)",
          "(err, next)"
        ],
        "answer": 1,
        "explanation": "Express identifies error-handling middleware specifically by inspecting fn.length === 4, expecting (err, req, res, next).",
        "topic": "Node.js"
      },
      {
        "question": "What is the purpose of the Express Router (express.Router())?",
        "options": [
          "Connect to Wi-Fi routers",
          "Create modular, mountable route handlers that isolate endpoints by feature (e.g., /api/users, /api/auth)",
          "Compile React components",
          "Send push notifications"
        ],
        "answer": 1,
        "explanation": "Express Router allows modularizing routes into separate files and mounting them under path prefixes, keeping server architecture clean.",
        "topic": "Express.js"
      }
    ],
    "mongo-auth": [
      {
        "question": "In Mongoose, what is the difference between .find() and .findOne()?",
        "options": [
          ".find() returns an array of matching documents; .findOne() returns the first single document or null",
          ".find() only works with numbers",
          ".findOne() searches all collections",
          "There is no difference"
        ],
        "answer": 0,
        "explanation": ".find() queries and returns a cursor/array of matching records, while .findOne() resolves to a single document object.",
        "topic": "MongoDB"
      },
      {
        "question": "How do you verify a JSON Web Token in an Express authentication middleware?",
        "options": [
          "Using jwt.verify(token, secret, callback)",
          "Comparing string length to 50",
          "Checking if token is an email address",
          "Querying the MongoDB database directly with raw token"
        ],
        "answer": 0,
        "explanation": "jwt.verify decodes the token, verifies the cryptographic signature using the secret key, and validates token expiration.",
        "topic": "Authentication"
      }
    ],
    "mern-project": [
      {
        "question": "How do you structure a production MERN repository to keep client and server concerns cleanly decoupled?",
        "options": [
          "Put all React code inside Express controllers",
          "Create separate client/ and server/ root folders with distinct package.json dependencies and environment configurations",
          "Commit node_modules to Git",
          "Use a single global JavaScript file"
        ],
        "answer": 1,
        "explanation": "Separating client/ and server/ directories isolates frontend build tooling from backend server dependencies, allowing independent deployments.",
        "topic": "React"
      },
      {
        "question": "What is the recommended method to securely store JWT tokens on the client to mitigate XSS and CSRF risks?",
        "options": [
          "Store in localStorage unconditionally",
          "Store in an HttpOnly, Secure, SameSite cookie, or store access token in memory with HttpOnly refresh cookie",
          "Write token to the browser URL bar",
          "Save in an unencrypted text file on the user desktop"
        ],
        "answer": 1,
        "explanation": "HttpOnly cookies prevent JavaScript access, eliminating XSS token theft, while SameSite attributes mitigate CSRF attacks.",
        "topic": "Authentication"
      }
    ],
    "mern-interview": [
      {
        "question": "How do you optimize a MERN application where a MongoDB aggregation query takes over 3 seconds to complete on 500,000 documents?",
        "options": [
          "Restart the Node server",
          "Analyze query execution with explain(\"executionStats\"), add compound indexes matching query filters and sorts, and project only required fields",
          "Switch to SQLite",
          "Remove all query filters"
        ],
        "answer": 1,
        "explanation": "Using explain() identifies collection scans (COLLSCAN). Adding compound indexes and narrowing projections allows MongoDB to satisfy queries via index scans (IXSCAN).",
        "topic": "MongoDB"
      },
      {
        "question": "How do you implement optimistic UI updates in a React + Express MERN application?",
        "options": [
          "Wait 5 seconds before updating state",
          "Immediately update client UI state assuming request success, and rollback to previous state with an error toast if the API request fails",
          "Reload the entire browser page on every click",
          "Disable all buttons permanently"
        ],
        "answer": 1,
        "explanation": "Optimistic updates improve perceived performance by updating the UI immediately while the background asynchronous request completes.",
        "topic": "React"
      }
    ]
  },
  "Java Backend Developer": {
    "java-foundations": [
      {
        "question": "What is the difference between method Overloading and method Overriding in Java?",
        "options": [
          "Overloading occurs in the same class with same name and different parameters (compile-time); Overriding redefines a superclass method in a subclass with exact same signature (runtime)",
          "Overloading is for interfaces; Overriding is for classes",
          "Overriding cannot use public modifier",
          "They are exact synonyms"
        ],
        "answer": 0,
        "explanation": "Overloading is compile-time polymorphism (same name, different arguments); Overriding is runtime polymorphism (subclass overrides parent method).",
        "topic": "Java"
      },
      {
        "question": "What is the difference between String, StringBuilder, and StringBuffer in Java?",
        "options": [
          "String is immutable; StringBuilder is mutable and not thread-safe; StringBuffer is mutable and thread-safe (synchronized)",
          "All 3 are completely immutable",
          "StringBuilder is slower than StringBuffer",
          "String is thread-safe because it is mutable"
        ],
        "answer": 0,
        "explanation": "String objects are immutable. StringBuilder provides fast unsynchronized mutable string manipulation, while StringBuffer synchronizes methods for thread safety.",
        "topic": "Java"
      },
      {
        "question": "Why does Java use an abstract class instead of an interface when default methods exist in Java 8+?",
        "options": [
          "Interfaces cannot have variables",
          "Abstract classes can hold state (non-static, non-final fields) and constructors, whereas interfaces can only hold constants (static final)",
          "Interfaces are deprecated",
          "Abstract classes are faster than interfaces"
        ],
        "answer": 1,
        "explanation": "Abstract classes allow defining internal state and constructors for code reuse across inheritance hierarchies, which interfaces cannot hold.",
        "topic": "OOP"
      }
    ],
    "java-collections": [
      {
        "question": "What is the contract between equals() and hashCode() in Java?",
        "options": [
          "If two objects are equal via equals(), they must have the same hashCode(); unequal hashCodes imply unequal objects",
          "hashCode() is never used in HashMaps",
          "Equal objects can have different hashCodes",
          "hashCode() always returns a positive prime number"
        ],
        "answer": 0,
        "explanation": "If a.equals(b) is true, then a.hashCode() MUST equal b.hashCode(). Violating this contract breaks HashMap and HashSet retrieval.",
        "topic": "Collections"
      },
      {
        "question": "What is the underlying data structure of Java HashMap and how is collision resolved?",
        "options": [
          "An array of linked lists/red-black trees; collisions append to buckets, converting to red-black trees when bucket size exceeds 8 (TREEIFY_THRESHOLD)",
          "A flat continuous binary array",
          "A circular queue",
          "A trie structure"
        ],
        "answer": 0,
        "explanation": "HashMap uses an array of buckets. Collisions chain via LinkedLists, upgrading to Red-Black Trees for O(log N) worst-case lookup when bucket length exceeds 8.",
        "topic": "Collections"
      },
      {
        "question": "What is the difference between Checked and Unchecked exceptions in Java?",
        "options": [
          "Checked exceptions inherit from Exception (excluding RuntimeException) and must be handled at compile-time; Unchecked inherit from RuntimeException and occur at runtime",
          "Checked exceptions crash the JVM immediately",
          "Unchecked exceptions must always be declared in throws clauses",
          "Checked exceptions are hardware errors"
        ],
        "answer": 0,
        "explanation": "Checked exceptions enforce explicit error handling at compile time (IOException, SQLException); RuntimeExceptions represent programming errors (NullPointerException).",
        "topic": "Exception Handling"
      }
    ],
    "spring-boot": [
      {
        "question": "What is Inversion of Control (IoC) and Dependency Injection (DI) in Spring Boot?",
        "options": [
          "A design pattern where object creation and lifecycle management are inverted to the Spring ApplicationContext container rather than manual instantiation with \"new\"",
          "A way to invert SQL query results",
          "A sorting algorithm for Java streams",
          "A method to reverse HTTP requests"
        ],
        "answer": 0,
        "explanation": "IoC delegates object creation and dependency assembly to the Spring IoC container, decoupling application components.",
        "topic": "Spring Boot"
      },
      {
        "question": "What is the difference between @Component, @Service, and @Repository in Spring Boot?",
        "options": [
          "They are functional stereotypes; @Repository enables automatic persistence exception translation, @Service signifies business logic, and @Component is the generic root",
          "They have completely different runtime JVM bytecodes",
          "@Service runs on a background thread",
          "@Component cannot be autowired"
        ],
        "answer": 0,
        "explanation": "All three are Spring-managed component stereotypes, with @Repository adding database exception translation and @Service clarifying domain semantics.",
        "topic": "Spring Boot"
      },
      {
        "question": "What does @SpringBootApplication encapsulate?",
        "options": [
          "@Configuration, @EnableAutoConfiguration, and @ComponentScan",
          "@Service, @Controller, and @Repository",
          "@Entity, @Table, and @Id",
          "@Bean and @Autowired"
        ],
        "answer": 0,
        "explanation": "@SpringBootApplication is a convenience annotation combining @Configuration, @EnableAutoConfiguration, and @ComponentScan with default attributes.",
        "topic": "Spring Boot"
      }
    ],
    "jpa-hibernate": [
      {
        "question": "What is the N+1 SELECT problem in JPA/Hibernate and how do you resolve it?",
        "options": [
          "A mathematical formula in SQL",
          "Fetching 1 parent entity triggers N separate queries for its lazy-loaded child collections; solved using JOIN FETCH, EntityGraphs, or @BatchSize",
          "An error when inserting N+1 rows",
          "A primary key conflict"
        ],
        "answer": 1,
        "explanation": "N+1 occurs when iterating child collections issues individual queries per parent; resolved by fetching associations eagerly in a single SQL query via JOIN FETCH.",
        "topic": "JPA/Hibernate"
      },
      {
        "question": "What is the difference between Lazy and Eager fetching in JPA entity mappings?",
        "options": [
          "Lazy loads associated entities only when accessed; Eager loads associated entities immediately alongside the parent entity",
          "Eager is for MongoDB; Lazy is for SQL",
          "Lazy loading causes immediate OutOfMemoryErrors",
          "There is no difference"
        ],
        "answer": 0,
        "explanation": "FetchType.LAZY delays loading child associations until explicitly referenced in an active transaction; FetchType.EAGER fetches them immediately in the initial query.",
        "topic": "JPA/Hibernate"
      },
      {
        "question": "What is the purpose of the @Transactional annotation in Spring?",
        "options": [
          "To speed up HTTP requests",
          "To wrap method execution inside a database transaction, committing on success and automatically rolling back on RuntimeException",
          "To convert Java objects to JSON",
          "To connect to message brokers"
        ],
        "answer": 1,
        "explanation": "@Transactional manages transaction lifecycles through Spring AOP, ensuring ACID compliance and rolling back on unhandled runtime exceptions.",
        "topic": "Spring Boot"
      }
    ],
    "java-project": [
      {
        "question": "How do you design a resilient microservice architecture using Spring Cloud / Netflix OSS patterns?",
        "options": [
          "Deploy all services on a single server without network connections",
          "Implement Service Discovery (Eureka), API Gateway (Spring Cloud Gateway), and Circuit Breakers (Resilience4j) to prevent cascading failures",
          "Disable all timeouts",
          "Hardcode IP addresses of all services"
        ],
        "answer": 1,
        "explanation": "Resilience4j circuit breakers prevent slow or failing downstream microservices from consuming thread pools and crashing upstream callers.",
        "topic": "Spring Boot"
      },
      {
        "question": "When implementing Spring Security with JWT tokens, where should the JwtAuthenticationFilter be placed in the filter chain?",
        "options": [
          "After ExceptionTranslationFilter",
          "Before UsernamePasswordAuthenticationFilter to intercept and authenticate requests before standard form processing",
          "At the very end of the filter chain",
          "Inside the database driver"
        ],
        "answer": 1,
        "explanation": "Placing custom JWT filters before UsernamePasswordAuthenticationFilter allows extracting tokens, validating claims, and populating SecurityContextHolder.",
        "topic": "Authentication"
      }
    ],
    "java-interview": [
      {
        "question": "How does the Java Virtual Machine (JVM) Garbage Collector manage memory across Young (Eden, Survivor) and Old generations?",
        "options": [
          "New objects are allocated in Eden; survivors of Minor GCs age into Survivor spaces and are eventually promoted to Old Gen, which is collected by Major/Full GC",
          "All memory is collected in a single global sweep every 1 millisecond",
          "The JVM never frees memory until reboot",
          "Garbage collection runs only in the browser"
        ],
        "answer": 0,
        "explanation": "The generational hypothesis states that most objects die young. Minor GC quickly cleans Eden; long-lived objects are promoted to Tenured (Old) Generation.",
        "topic": "Java"
      },
      {
        "question": "What is the difference between synchronized blocks and java.util.concurrent.locks.ReentrantLock?",
        "options": [
          "ReentrantLock provides advanced features like fairness policies, tryLock() with timeouts, and interruptible locks, while synchronized is simpler language-level syntax",
          "synchronized is faster in all cases",
          "ReentrantLock cannot lock objects",
          "They are exact duplicates"
        ],
        "answer": 0,
        "explanation": "ReentrantLock allows non-blocking lock acquisition, timeout handling, and multiple condition variables beyond standard synchronized monitor semantics.",
        "topic": "Multithreading"
      }
    ]
  },
  "DevOps Engineer": {
    "devops-foundations": [
      {
        "question": "What is the exit code of a successfully executed Bash command in Linux?",
        "options": [
          "0",
          "1",
          "-1",
          "255"
        ],
        "answer": 0,
        "explanation": "In POSIX operating systems, an exit status of 0 represents standard successful command termination.",
        "topic": "Linux"
      },
      {
        "question": "Which command displays active network listening sockets and TCP connections with PID info?",
        "options": [
          "netstat -tulpn / ss -tulpn",
          "ls -la",
          "ps aux",
          "traceroute"
        ],
        "answer": 0,
        "explanation": "ss -tulpn or netstat -tulpn lists listening TCP/UDP sockets with process names and numerical ports.",
        "topic": "Networking"
      },
      {
        "question": "What is Git rebase and how does it differ from Git merge?",
        "options": [
          "Rebase rewrites commit history by moving base commits onto a new parent; merge creates a 3-way merge commit preserving exact chronological branch history",
          "Rebase deletes all code changes",
          "Merge cannot resolve conflicts",
          "Rebase only works on remote repositories"
        ],
        "answer": 0,
        "explanation": "Git rebase replays feature commits sequentially on top of the target base, creating a clean linear commit graph.",
        "topic": "Git"
      }
    ],
    "containerization": [
      {
        "question": "Why are Docker multi-stage builds recommended for production images?",
        "options": [
          "They run multiple containers at once",
          "They separate the build environment (compilers, SDKs) from the minimal runtime image, reducing image size and attack surface",
          "They automatically configure Kubernetes",
          "They speed up internet downloads"
        ],
        "answer": 1,
        "explanation": "Multi-stage builds copy only compiled artifacts into a lightweight base image (e.g. alpine, distroless), keeping image sizes minimal and secure.",
        "topic": "Docker"
      },
      {
        "question": "What is the difference between Docker ADD and COPY instructions?",
        "options": [
          "COPY strictly copies local files into the container; ADD can also extract local tar archives and download remote URLs",
          "COPY is deprecated",
          "ADD only works with text files",
          "There is no difference"
        ],
        "answer": 0,
        "explanation": "Best practice is to use COPY for predictable file copying, reserving ADD only when automatic tar extraction is specifically needed.",
        "topic": "Docker"
      }
    ],
    "orchestration": [
      {
        "question": "In Kubernetes, what is the fundamental unit of deployment and scheduling?",
        "options": [
          "Container",
          "Pod",
          "Service",
          "Namespace"
        ],
        "answer": 1,
        "explanation": "A Pod is the smallest deployable computing unit in Kubernetes, consisting of one or more tightly coupled containers sharing storage and network.",
        "topic": "Kubernetes"
      },
      {
        "question": "What is the purpose of a Kubernetes ClusterIP Service vs a NodePort Service?",
        "options": [
          "ClusterIP exposes the service on an internal IP reachable only within the cluster; NodePort exposes it on each node’s IP at a static port",
          "ClusterIP is public; NodePort is private",
          "NodePort can only run on 1 pod",
          "There is no difference"
        ],
        "answer": 0,
        "explanation": "ClusterIP is the default internal Kubernetes service type; NodePort exposes services externally on a high-range port across cluster worker nodes.",
        "topic": "Kubernetes"
      },
      {
        "question": "What is the difference between a Kubernetes Liveness Probe and a Readiness Probe?",
        "options": [
          "Liveness checks if the container is running and restarts it if unhealthy; Readiness checks if the pod is ready to accept incoming network traffic",
          "Readiness restarts containers; Liveness deletes pods",
          "They are exact duplicates",
          "Liveness probe is for CPU only"
        ],
        "answer": 0,
        "explanation": "Liveness probes recover stuck containers via restarts; readiness probes prevent traffic routing to pods during warm-up or temporary overload.",
        "topic": "Kubernetes"
      }
    ],
    "iac-cicd": [
      {
        "question": "What is the purpose of Terraform state locking?",
        "options": [
          "To encrypt terraform code",
          "To prevent concurrent executions of terraform apply from corrupting the state file simultaneously",
          "To lock user passwords",
          "To disable terraform destroy permanently"
        ],
        "answer": 1,
        "explanation": "State locking (via DynamoDB or cloud storage backends) serializes access, preventing multiple engineers or pipelines from conflicting.",
        "topic": "Terraform"
      },
      {
        "question": "In a CI/CD pipeline, what is the difference between Continuous Delivery and Continuous Deployment?",
        "options": [
          "Continuous Delivery automatically tests and builds artifacts ready for manual release trigger; Continuous Deployment automatically deploys every passing commit to production without manual approval",
          "Continuous Deployment requires manual testing",
          "They are exact synonyms",
          "Continuous Delivery does not run tests"
        ],
        "answer": 0,
        "explanation": "Continuous Delivery guarantees deployment-ready code with a human release gate; Continuous Deployment eliminates the manual gate, deploying directly to production.",
        "topic": "CI/CD"
      }
    ],
    "devops-project": [
      {
        "question": "What is GitOps (e.g. with ArgoCD or Flux) and why is it preferred for Kubernetes management?",
        "options": [
          "Writing documentation on GitHub",
          "Using a Git repository as the single source of truth for declared infrastructure and application state, with automated sync controllers reconciling cluster drift",
          "Running Git commands in Docker",
          "Using GitHub Copilot to write code"
        ],
        "answer": 1,
        "explanation": "GitOps ensures the live cluster state continuously matches configuration stored in version control, providing automated drift detection and instant audit logs.",
        "topic": "Kubernetes"
      }
    ],
    "devops-interview": [
      {
        "question": "How do you perform a Canary deployment in Kubernetes to minimize blast radius when rolling out a risky backend change?",
        "options": [
          "Delete the old deployment and create a new one immediately",
          "Deploy a small percentage of pods running the new version behind an ingress/service mesh (e.g. Istio) routing 5% traffic, evaluate metrics, and progressively roll forward",
          "Test the release on production users on Friday evening",
          "Deploy the code to a staging server only"
        ],
        "answer": 1,
        "explanation": "Canary routing exposes the update to a tiny fraction of real production traffic, verifying error rates and latency before wide rollout.",
        "topic": "CI/CD"
      },
      {
        "question": "What are the 4 Golden Signals of monitoring in Site Reliability Engineering (SRE)?",
        "options": [
          "CPU, RAM, Disk, Network",
          "Latency, Traffic, Errors, and Saturation",
          "Commits, Merges, Deploys, Reverts",
          "Cost, Revenue, Users, Profit"
        ],
        "answer": 1,
        "explanation": "Google SRE identifies Latency (request duration), Traffic (demand/RPS), Errors (rate of failure), and Saturation (fullness of resource) as the critical system health signals.",
        "topic": "Observability"
      }
    ]
  },
  "Data Analyst": {
    "data-foundations": [
      {
        "question": "What is the difference between Mean, Median, and Mode in exploratory data analysis?",
        "options": [
          "Mean is the mathematical average; Median is the middle value in a sorted dataset; Mode is the most frequently occurring value",
          "They are exact synonyms",
          "Median is only for text data",
          "Mode is the standard deviation"
        ],
        "answer": 0,
        "explanation": "Mean computes total sum divided by count; Median represents the 50th percentile (robust to extreme outliers); Mode represents modal frequency.",
        "topic": "Statistics"
      },
      {
        "question": "When a dataset is strongly right-skewed (positive skew), how are Mean and Median typically related?",
        "options": [
          "Mean > Median",
          "Median > Mean",
          "Mean == Median",
          "They cannot be compared"
        ],
        "answer": 0,
        "explanation": "In right-skewed distributions, extreme high outliers pull the Mean to the right, making the Mean higher than the Median.",
        "topic": "Statistics"
      },
      {
        "question": "What does a p-value < 0.05 signify in statistical hypothesis testing?",
        "options": [
          "Accept the null hypothesis as true",
          "Statistically significant evidence to reject the null hypothesis in favor of the alternative hypothesis",
          "Data is completely invalid",
          "Sample size is insufficient"
        ],
        "answer": 1,
        "explanation": "A p-value below 0.05 indicates less than 5% probability that the observed result occurred by random chance under the null hypothesis.",
        "topic": "Statistics"
      }
    ],
    "sql-analysis": [
      {
        "question": "What is the key difference between WHERE and HAVING in SQL?",
        "options": [
          "WHERE filters rows before grouping; HAVING filters aggregated groups after GROUP BY",
          "WHERE is for aggregates; HAVING is for tables",
          "HAVING works without GROUP BY always",
          "There is no difference"
        ],
        "answer": 0,
        "explanation": "WHERE filters individual row records; HAVING applies conditions to grouped and aggregated data.",
        "topic": "SQL"
      },
      {
        "question": "Which window function in SQL assigns a unique sequential integer to rows within a partition without gaps?",
        "options": [
          "RANK()",
          "DENSE_RANK()",
          "ROW_NUMBER()",
          "LEAD()"
        ],
        "answer": 2,
        "explanation": "ROW_NUMBER() assigns a unique continuous sequential number to each row in the window partition.",
        "topic": "SQL"
      },
      {
        "question": "What is the difference between UNION and UNION ALL in SQL?",
        "options": [
          "UNION removes duplicate rows (requires internal sorting); UNION ALL combines all rows including duplicates and is faster",
          "UNION ALL deletes matching rows",
          "UNION only works on 1 table",
          "They are identical"
        ],
        "answer": 0,
        "explanation": "UNION executes a distinct operation to eliminate duplicates, making UNION ALL computationally faster when duplicates are acceptable or absent.",
        "topic": "SQL"
      }
    ],
    "python-analysis": [
      {
        "question": "In Pandas, which method fills missing NaN values with a default value, mean, or interpolation?",
        "options": [
          "dropna()",
          "fillna()",
          "replace()",
          "isnull()"
        ],
        "answer": 1,
        "explanation": "fillna() replaces missing NaN values with specified constants, forward/backward values, or statistical calculations.",
        "topic": "Python"
      },
      {
        "question": "Which function merges two Pandas DataFrames based on a shared key column?",
        "options": [
          "pd.concat()",
          "pd.merge()",
          "df.append()",
          "df.join_tables()"
        ],
        "answer": 1,
        "explanation": "pd.merge() performs database-style joins on DataFrames matching specified keys.",
        "topic": "Python"
      },
      {
        "question": "What is the difference between loc and iloc indexing in Pandas?",
        "options": [
          "loc is label-based indexing; iloc is integer position-based indexing",
          "iloc is for columns only; loc is for rows only",
          "They are exact duplicates",
          "loc is deprecated"
        ],
        "answer": 0,
        "explanation": "df.loc[] selects rows and columns by explicit names/labels; df.iloc[] selects by zero-based integer index positions.",
        "topic": "Python"
      }
    ],
    "data-visualization": [
      {
        "question": "Which visual chart is most effective for displaying proportions of a whole across 3-4 categories?",
        "options": [
          "Scatter plot",
          "Donut or Bar chart",
          "Line chart",
          "Heatmap"
        ],
        "answer": 1,
        "explanation": "Bar or donut charts clearly display relative categorical proportions without misleading area interpretations.",
        "topic": "Power BI"
      },
      {
        "question": "When is a Box Plot (Box-and-Whisker) preferred over a standard bar chart?",
        "options": [
          "When you want to display summary statistics (median, quartiles, IQR) and visualize data dispersion and outliers across categories",
          "When showing time-series sales trends",
          "When displaying a single number",
          "When plotting geospatial coordinates"
        ],
        "answer": 0,
        "explanation": "Box plots illustrate the five-number summary (min, Q1, median, Q3, max) and clearly identify statistical outliers.",
        "topic": "Data Visualization"
      }
    ],
    "analytics-project": [
      {
        "question": "What business metric measures the percentage of subscribers who cancel or fail to renew over a given period?",
        "options": [
          "Churn Rate",
          "Conversion Rate",
          "Customer Lifetime Value",
          "Net Promoter Score"
        ],
        "answer": 0,
        "explanation": "Churn rate calculates the proportion of lost customers over a specific timeframe.",
        "topic": "Business Analysis"
      },
      {
        "question": "What is Customer Acquisition Cost (CAC) and why is CAC to LTV ratio important?",
        "options": [
          "A tax metric",
          "CAC measures total sales and marketing spend divided by new customers acquired; LTV:CAC ratio evaluates long-term business sustainability (healthy ratio is 3:1+)",
          "CAC is total company revenue",
          "It only applies to non-profit organizations"
        ],
        "answer": 1,
        "explanation": "LTV:CAC compares the lifetime customer value against acquisition cost, measuring whether customer acquisition is profitable.",
        "topic": "Business Analysis"
      }
    ],
    "data-interview": [
      {
        "question": "How do you handle severe outliers in a numerical dataset when training predictive or regression models?",
        "options": [
          "Delete all rows unconditionally",
          "Assess domain cause, apply log/power transforms, or cap with IQR winsorization",
          "Replace with zero always",
          "Ignore them"
        ],
        "answer": 1,
        "explanation": "Outliers should be analyzed in business context, then handled via capping (IQR winsorization), transformations, or robust scaling.",
        "topic": "Statistics"
      },
      {
        "question": "How do you design an A/B test to measure if a new product checkout page increases conversion rate significantly?",
        "options": [
          "Show new page to everyone for 1 hour",
          "Formulate null/alternative hypotheses, calculate required sample size via power analysis, randomly partition users 50/50, and evaluate statistical significance via two-proportion z-test",
          "Ask 5 employees their opinion",
          "Change colors every day without tracking"
        ],
        "answer": 1,
        "explanation": "Valid A/B testing requires statistical power calculation, randomized split testing, and significance testing (p < 0.05) to eliminate random noise.",
        "topic": "Statistics"
      }
    ]
  },
  "Software Developer": {
    "se-foundations": [
      {
        "question": "What does the Single Responsibility Principle (SRP) in SOLID design state?",
        "options": [
          "A class should have only one reason to change, meaning it should perform a single cohesive job",
          "A class must have only one method",
          "A file can only contain one variable",
          "A program must run on a single thread"
        ],
        "answer": 0,
        "explanation": "SRP dictates that a class or module should encapsulate one well-defined responsibility to promote modularity and testability.",
        "topic": "OOP"
      },
      {
        "question": "What is the difference between an Abstract Class and an Interface in Object-Oriented Programming?",
        "options": [
          "An abstract class can maintain state and concrete method implementations; an interface defines a pure contract for behavior",
          "Interfaces cannot be implemented by multiple classes",
          "Abstract classes can be instantiated directly with \"new\"",
          "There is no distinction"
        ],
        "answer": 0,
        "explanation": "Interfaces define behavioral contracts; abstract classes provide common state and partial implementations for subclasses.",
        "topic": "OOP"
      }
    ],
    "dsa-core": [
      {
        "question": "What is the time complexity of searching for an element in a balanced Binary Search Tree (BST)?",
        "options": [
          "O(1)",
          "O(log N)",
          "O(N)",
          "O(N^2)"
        ],
        "answer": 1,
        "explanation": "Each comparison in a balanced BST halves the search space, yielding O(log N) lookup time.",
        "topic": "DSA"
      },
      {
        "question": "What data structure is typically used to implement Breadth-First Search (BFS) in a graph?",
        "options": [
          "Stack",
          "Queue",
          "Heap",
          "Disjoint Set"
        ],
        "answer": 1,
        "explanation": "BFS explores neighbor vertices layer-by-layer using a First-In-First-Out (FIFO) Queue.",
        "topic": "DSA"
      },
      {
        "question": "What is the average and worst-case time complexity of QuickSort?",
        "options": [
          "Average O(N log N), Worst O(N^2)",
          "Average O(N), Worst O(N log N)",
          "Average O(N^2), Worst O(N^2)",
          "Average O(1), Worst O(N)"
        ],
        "answer": 0,
        "explanation": "QuickSort runs in O(N log N) on average, but degrades to O(N^2) if poor pivots are chosen (e.g. already sorted array without randomized pivot).",
        "topic": "DSA"
      }
    ],
    "sql-data": [
      {
        "question": "What is Third Normal Form (3NF) in database relational design?",
        "options": [
          "Table is in 2NF and has no transitive functional dependencies (every non-prime attribute depends only on the primary key)",
          "Table has 3 columns only",
          "All data is stored in text format",
          "Foreign keys are banned"
        ],
        "answer": 0,
        "explanation": "3NF eliminates transitive dependencies: all attributes must depend on the key, the whole key, and nothing but the key.",
        "topic": "SQL"
      },
      {
        "question": "What is the difference between an INNER JOIN and a LEFT OUTER JOIN?",
        "options": [
          "INNER JOIN returns only matching rows from both tables; LEFT JOIN returns all rows from the left table and matched rows from the right table (filling nulls if unmatched)",
          "INNER JOIN is for NoSQL only",
          "LEFT JOIN deletes right table rows",
          "They are exact duplicates"
        ],
        "answer": 0,
        "explanation": "INNER JOIN discards unmatched rows; LEFT OUTER JOIN preserves all records from the left table regardless of right table matches.",
        "topic": "SQL"
      }
    ],
    "system-arch": [
      {
        "question": "What is the primary benefit of the Factory Method design pattern?",
        "options": [
          "It creates objects without exposing the instantiation logic to the client, referring to the newly created object through a common interface",
          "It speeds up network cards",
          "It replaces relational databases",
          "It formats string variables"
        ],
        "answer": 0,
        "explanation": "Factory Method encapsulates object creation, allowing the system to introduce new concrete types without breaking client code.",
        "topic": "System Design"
      },
      {
        "question": "What is the CAP theorem in distributed systems?",
        "options": [
          "Consistency, Availability, and Partition tolerance: a distributed data store can only guarantee at most two of these three properties simultaneously",
          "Cache, API, Performance",
          "Compile, Assemble, Package",
          "Clients, Applications, Programs"
        ],
        "answer": 0,
        "explanation": "In the presence of a network partition (P), a distributed system must choose between Consistency (C) or Availability (A).",
        "topic": "System Design"
      }
    ],
    "se-project": [
      {
        "question": "Why is automated regression testing vital before deploying software updates to production?",
        "options": [
          "To verify that new features have not inadvertently broken existing, previously working functionality",
          "To make files larger",
          "To delay the deployment indefinitely",
          "To test employee typing speed"
        ],
        "answer": 0,
        "explanation": "Regression testing verifies that codebase modifications have no unintended side effects on existing system features.",
        "topic": "Testing"
      }
    ],
    "se-interview": [
      {
        "question": "When analyzing algorithms, what is the difference between Time Complexity and Space Complexity?",
        "options": [
          "Time complexity measures runtime operations relative to input size N; space complexity measures auxiliary memory allocated relative to N",
          "Time complexity is measured in seconds on a stopwatch",
          "Space complexity refers to hard drive space on Amazon S3",
          "There is no difference"
        ],
        "answer": 0,
        "explanation": "Big-O notation quantifies asymptotic computational steps (time) and auxiliary memory consumption (space) as input size grows.",
        "topic": "DSA"
      }
    ]
  },
  "QA Automation Engineer": {
    "qa-foundations": [
      {
        "question": "What is the difference between Verification and Validation in software quality assurance?",
        "options": [
          "Verification asks \"Are we building the product right?\" (process checks); Validation asks \"Are we building the right product?\" (user requirement fulfillment)",
          "Verification is for code; Validation is for spelling",
          "They are exact synonyms",
          "Verification only occurs after production deployment"
        ],
        "answer": 0,
        "explanation": "Verification evaluates artifacts during development (reviews, static analysis); Validation evaluates the running software against user expectations.",
        "topic": "Automation Testing"
      },
      {
        "question": "What is the difference between Functional Testing and Non-Functional Testing?",
        "options": [
          "Functional tests what the system does (features, inputs/outputs); Non-functional tests how well it performs (load, security, scalability, usability)",
          "Non-functional testing is optional and never done",
          "Functional testing only tests UI styles",
          "They are identical"
        ],
        "answer": 0,
        "explanation": "Functional testing validates business requirements; non-functional testing verifies quality attributes like performance, reliability, and security.",
        "topic": "Automation Testing"
      }
    ],
    "ui-automation": [
      {
        "question": "In Selenium WebDriver / Playwright, what is the Page Object Model (POM) design pattern?",
        "options": [
          "A pattern where web pages are represented as classes and elements/actions are encapsulated as methods, promoting test reusability and maintainability",
          "A CSS styling guide",
          "A method to bypass logins",
          "A browser extension"
        ],
        "answer": 0,
        "explanation": "POM abstracts UI locators and user interactions into dedicated page classes, shielding test scripts from UI layout changes.",
        "topic": "Selenium / Playwright"
      },
      {
        "question": "Why is using Explicit Waits preferred over Implicit Waits or Thread.sleep() in UI test automation?",
        "options": [
          "Explicit waits poll for specific expected conditions (e.g. elementToBeClickable) dynamically, resuming as soon as satisfied without arbitrary sleep delays",
          "Explicit waits freeze the CPU",
          "Implicit waits are faster in all situations",
          "Thread.sleep() is recommended by W3C"
        ],
        "answer": 0,
        "explanation": "Explicit waits make tests deterministic and fast by waiting only as long as necessary for conditions to be met, eliminating flaky timing failures.",
        "topic": "Selenium / Playwright"
      }
    ],
    "api-testing": [
      {
        "question": "When testing a REST API, what assertions should an automated test perform on a POST /api/users endpoint?",
        "options": [
          "Verify HTTP 201 status code, response time within threshold, response JSON schema validation, and database state verification",
          "Check only that the server does not crash",
          "Verify font size of JSON text",
          "Check client screen resolution"
        ],
        "answer": 0,
        "explanation": "Thorough API testing asserts status code, headers, payload schema contract, business validation, and data persistence.",
        "topic": "API Testing"
      }
    ],
    "qa-project": [
      {
        "question": "How do you integrate automated test suites into a CI/CD pipeline (e.g. GitHub Actions)?",
        "options": [
          "Run tests in a headless container on every pull request, publish test reports, and block merge if any critical regression test fails",
          "Manually click run once a month",
          "Email test code to the manager",
          "Run tests only on developer laptops"
        ],
        "answer": 0,
        "explanation": "CI integration automatically runs headless test suites on code branches, establishing automated quality gates before release.",
        "topic": "CI/CD"
      }
    ],
    "qa-interview": [
      {
        "question": "How do you identify, isolate, and resolve \"flaky tests\" in an automated test suite?",
        "options": [
          "Delete the test immediately",
          "Analyze logs for race conditions or unhandled dynamic loading, replace static sleeps with smart explicit waits, isolate test data, and ensure clean test fixture teardown",
          "Rerun the test 100 times until it passes once",
          "Ignore the failures"
        ],
        "answer": 1,
        "explanation": "Flaky tests stem from asynchronous timing issues, shared state, or network instability. Fixing requires deterministic waits, mock data, and clean state isolation.",
        "topic": "Automation Testing"
      }
    ]
  },
  "Python Developer": {
    "python-foundations": [
      {
        "question": "What is the Global Interpreter Lock (GIL) in CPython and how does it affect multithreading?",
        "options": [
          "A mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes simultaneously in a single process",
          "A security key for Python scripts",
          "A database lock in SQLite",
          "A lock on file downloads"
        ],
        "answer": 0,
        "explanation": "The GIL allows only one thread to execute Python bytecode at a time, meaning CPU-bound tasks require multiprocessing rather than multithreading.",
        "topic": "Python"
      },
      {
        "question": "What is the difference between a Python Generator and a standard List?",
        "options": [
          "Generators yield items one-by-one lazily on-demand using \"yield\" without storing the entire sequence in memory, whereas lists allocate all items in RAM upfront",
          "Generators are immutable lists",
          "Lists can only store numbers",
          "Generators cannot be iterated with a for loop"
        ],
        "answer": 0,
        "explanation": "Generators provide memory-efficient stream processing by producing values lazily via the iterator protocol.",
        "topic": "Python"
      }
    ],
    "python-web": [
      {
        "question": "Why is FastAPI faster than traditional Flask or Django for I/O-bound microservices?",
        "options": [
          "It uses C++ directly",
          "It is built natively on ASGI (Starlette) and supports native Python async/await non-blocking concurrency",
          "It disables all data validation",
          "It does not use HTTP"
        ],
        "answer": 1,
        "explanation": "FastAPI leverages modern asynchronous Python (async/await) and Pydantic for high-performance non-blocking request handling.",
        "topic": "FastAPI / Django"
      },
      {
        "question": "What is the purpose of Pydantic models in FastAPI applications?",
        "options": [
          "Data parsing, strong typing, automatic request validation, and automatic OpenAPI documentation generation",
          "CSS layout generation",
          "Database hardware monitoring",
          "Compiling Python to JavaScript"
        ],
        "answer": 0,
        "explanation": "Pydantic validates incoming payload types against Python type hints, automatically rejecting malformed requests with 422 Unprocessable Entity.",
        "topic": "REST APIs"
      }
    ],
    "python-data": [
      {
        "question": "What is the difference between synchronous SQLAlchemy operations and AsyncSession in modern Python backends?",
        "options": [
          "AsyncSession utilizes non-blocking async/await drivers (e.g. asyncpg) allowing the event loop to serve other requests while waiting for database queries to return",
          "AsyncSession is deprecated",
          "Synchronous SQLAlchemy is for NoSQL only",
          "There is no difference"
        ],
        "answer": 0,
        "explanation": "AsyncSession prevents database I/O from blocking the Python event loop, dramatically increasing concurrent throughput under heavy load.",
        "topic": "SQL"
      }
    ],
    "python-project": [
      {
        "question": "In a production Python backend, how should background asynchronous tasks (e.g. sending emails, generating reports) be handled?",
        "options": [
          "Run them in the main web request thread with time.sleep()",
          "Offload them to a distributed task queue like Celery or RQ backed by Redis/RabbitMQ",
          "Write a while(true) loop inside the API controller",
          "Ask the user to wait on the webpage"
        ],
        "answer": 1,
        "explanation": "Task queues decouple long-running jobs from the HTTP request-response cycle, executing work asynchronously across worker processes.",
        "topic": "Python"
      }
    ],
    "python-interview": [
      {
        "question": "What are Python Decorators and how are they implemented under the hood?",
        "options": [
          "A syntax for CSS colors",
          "Functions that take another function as an argument, extend or modify its behavior without modifying source code, and return a callable wrapper",
          "A class constructor",
          "A method to encrypt code"
        ],
        "answer": 1,
        "explanation": "Decorators leverage first-class functions and closures to wrap and extend function behavior (e.g., @app.get, @login_required, @timer).",
        "topic": "Python"
      }
    ]
  },
  "Java Developer": {
    "java-foundations": [
      {
        "question": "What is the difference between method Overloading and method Overriding in Java?",
        "options": [
          "Overloading occurs in the same class with same name and different parameters (compile-time); Overriding redefines a superclass method in a subclass with exact same signature (runtime)",
          "Overloading is for interfaces; Overriding is for classes",
          "Overriding cannot use public modifier",
          "They are exact synonyms"
        ],
        "answer": 0,
        "explanation": "Overloading is compile-time polymorphism (same name, different arguments); Overriding is runtime polymorphism (subclass overrides parent method).",
        "topic": "Java"
      },
      {
        "question": "What is the difference between String, StringBuilder, and StringBuffer in Java?",
        "options": [
          "String is immutable; StringBuilder is mutable and not thread-safe; StringBuffer is mutable and thread-safe (synchronized)",
          "All 3 are completely immutable",
          "StringBuilder is slower than StringBuffer",
          "String is thread-safe because it is mutable"
        ],
        "answer": 0,
        "explanation": "String objects are immutable. StringBuilder provides fast unsynchronized mutable string manipulation, while StringBuffer synchronizes methods for thread safety.",
        "topic": "Java"
      },
      {
        "question": "Why does Java use an abstract class instead of an interface when default methods exist in Java 8+?",
        "options": [
          "Interfaces cannot have variables",
          "Abstract classes can hold state (non-static, non-final fields) and constructors, whereas interfaces can only hold constants (static final)",
          "Interfaces are deprecated",
          "Abstract classes are faster than interfaces"
        ],
        "answer": 1,
        "explanation": "Abstract classes allow defining internal state and constructors for code reuse across inheritance hierarchies, which interfaces cannot hold.",
        "topic": "OOP"
      }
    ],
    "java-collections": [
      {
        "question": "What is the contract between equals() and hashCode() in Java?",
        "options": [
          "If two objects are equal via equals(), they must have the same hashCode(); unequal hashCodes imply unequal objects",
          "hashCode() is never used in HashMaps",
          "Equal objects can have different hashCodes",
          "hashCode() always returns a positive prime number"
        ],
        "answer": 0,
        "explanation": "If a.equals(b) is true, then a.hashCode() MUST equal b.hashCode(). Violating this contract breaks HashMap and HashSet retrieval.",
        "topic": "Collections"
      },
      {
        "question": "What is the underlying data structure of Java HashMap and how is collision resolved?",
        "options": [
          "An array of linked lists/red-black trees; collisions append to buckets, converting to red-black trees when bucket size exceeds 8 (TREEIFY_THRESHOLD)",
          "A flat continuous binary array",
          "A circular queue",
          "A trie structure"
        ],
        "answer": 0,
        "explanation": "HashMap uses an array of buckets. Collisions chain via LinkedLists, upgrading to Red-Black Trees for O(log N) worst-case lookup when bucket length exceeds 8.",
        "topic": "Collections"
      },
      {
        "question": "What is the difference between Checked and Unchecked exceptions in Java?",
        "options": [
          "Checked exceptions inherit from Exception (excluding RuntimeException) and must be handled at compile-time; Unchecked inherit from RuntimeException and occur at runtime",
          "Checked exceptions crash the JVM immediately",
          "Unchecked exceptions must always be declared in throws clauses",
          "Checked exceptions are hardware errors"
        ],
        "answer": 0,
        "explanation": "Checked exceptions enforce explicit error handling at compile time (IOException, SQLException); RuntimeExceptions represent programming errors (NullPointerException).",
        "topic": "Exception Handling"
      }
    ],
    "spring-boot": [
      {
        "question": "What is Inversion of Control (IoC) and Dependency Injection (DI) in Spring Boot?",
        "options": [
          "A design pattern where object creation and lifecycle management are inverted to the Spring ApplicationContext container rather than manual instantiation with \"new\"",
          "A way to invert SQL query results",
          "A sorting algorithm for Java streams",
          "A method to reverse HTTP requests"
        ],
        "answer": 0,
        "explanation": "IoC delegates object creation and dependency assembly to the Spring IoC container, decoupling application components.",
        "topic": "Spring Boot"
      },
      {
        "question": "What is the difference between @Component, @Service, and @Repository in Spring Boot?",
        "options": [
          "They are functional stereotypes; @Repository enables automatic persistence exception translation, @Service signifies business logic, and @Component is the generic root",
          "They have completely different runtime JVM bytecodes",
          "@Service runs on a background thread",
          "@Component cannot be autowired"
        ],
        "answer": 0,
        "explanation": "All three are Spring-managed component stereotypes, with @Repository adding database exception translation and @Service clarifying domain semantics.",
        "topic": "Spring Boot"
      },
      {
        "question": "What does @SpringBootApplication encapsulate?",
        "options": [
          "@Configuration, @EnableAutoConfiguration, and @ComponentScan",
          "@Service, @Controller, and @Repository",
          "@Entity, @Table, and @Id",
          "@Bean and @Autowired"
        ],
        "answer": 0,
        "explanation": "@SpringBootApplication is a convenience annotation combining @Configuration, @EnableAutoConfiguration, and @ComponentScan with default attributes.",
        "topic": "Spring Boot"
      }
    ],
    "jpa-hibernate": [
      {
        "question": "What is the N+1 SELECT problem in JPA/Hibernate and how do you resolve it?",
        "options": [
          "A mathematical formula in SQL",
          "Fetching 1 parent entity triggers N separate queries for its lazy-loaded child collections; solved using JOIN FETCH, EntityGraphs, or @BatchSize",
          "An error when inserting N+1 rows",
          "A primary key conflict"
        ],
        "answer": 1,
        "explanation": "N+1 occurs when iterating child collections issues individual queries per parent; resolved by fetching associations eagerly in a single SQL query via JOIN FETCH.",
        "topic": "JPA/Hibernate"
      },
      {
        "question": "What is the difference between Lazy and Eager fetching in JPA entity mappings?",
        "options": [
          "Lazy loads associated entities only when accessed; Eager loads associated entities immediately alongside the parent entity",
          "Eager is for MongoDB; Lazy is for SQL",
          "Lazy loading causes immediate OutOfMemoryErrors",
          "There is no difference"
        ],
        "answer": 0,
        "explanation": "FetchType.LAZY delays loading child associations until explicitly referenced in an active transaction; FetchType.EAGER fetches them immediately in the initial query.",
        "topic": "JPA/Hibernate"
      },
      {
        "question": "What is the purpose of the @Transactional annotation in Spring?",
        "options": [
          "To speed up HTTP requests",
          "To wrap method execution inside a database transaction, committing on success and automatically rolling back on RuntimeException",
          "To convert Java objects to JSON",
          "To connect to message brokers"
        ],
        "answer": 1,
        "explanation": "@Transactional manages transaction lifecycles through Spring AOP, ensuring ACID compliance and rolling back on unhandled runtime exceptions.",
        "topic": "Spring Boot"
      }
    ],
    "java-project": [
      {
        "question": "How do you design a resilient microservice architecture using Spring Cloud / Netflix OSS patterns?",
        "options": [
          "Deploy all services on a single server without network connections",
          "Implement Service Discovery (Eureka), API Gateway (Spring Cloud Gateway), and Circuit Breakers (Resilience4j) to prevent cascading failures",
          "Disable all timeouts",
          "Hardcode IP addresses of all services"
        ],
        "answer": 1,
        "explanation": "Resilience4j circuit breakers prevent slow or failing downstream microservices from consuming thread pools and crashing upstream callers.",
        "topic": "Spring Boot"
      },
      {
        "question": "When implementing Spring Security with JWT tokens, where should the JwtAuthenticationFilter be placed in the filter chain?",
        "options": [
          "After ExceptionTranslationFilter",
          "Before UsernamePasswordAuthenticationFilter to intercept and authenticate requests before standard form processing",
          "At the very end of the filter chain",
          "Inside the database driver"
        ],
        "answer": 1,
        "explanation": "Placing custom JWT filters before UsernamePasswordAuthenticationFilter allows extracting tokens, validating claims, and populating SecurityContextHolder.",
        "topic": "Authentication"
      }
    ],
    "java-interview": [
      {
        "question": "How does the Java Virtual Machine (JVM) Garbage Collector manage memory across Young (Eden, Survivor) and Old generations?",
        "options": [
          "New objects are allocated in Eden; survivors of Minor GCs age into Survivor spaces and are eventually promoted to Old Gen, which is collected by Major/Full GC",
          "All memory is collected in a single global sweep every 1 millisecond",
          "The JVM never frees memory until reboot",
          "Garbage collection runs only in the browser"
        ],
        "answer": 0,
        "explanation": "The generational hypothesis states that most objects die young. Minor GC quickly cleans Eden; long-lived objects are promoted to Tenured (Old) Generation.",
        "topic": "Java"
      },
      {
        "question": "What is the difference between synchronized blocks and java.util.concurrent.locks.ReentrantLock?",
        "options": [
          "ReentrantLock provides advanced features like fairness policies, tryLock() with timeouts, and interruptible locks, while synchronized is simpler language-level syntax",
          "synchronized is faster in all cases",
          "ReentrantLock cannot lock objects",
          "They are exact duplicates"
        ],
        "answer": 0,
        "explanation": "ReentrantLock allows non-blocking lock acquisition, timeout handling, and multiple condition variables beyond standard synchronized monitor semantics.",
        "topic": "Multithreading"
      }
    ]
  }
};
