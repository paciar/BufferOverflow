# BufferOverflow
A full-stack clone of StackOverflow, a Q&A website used by developers to post and answer programming-related questions. Built using MongoDB, Express.js, React, and Node.js.

Originally a term programming project for CSE316 (Fundamentals of Software Development), I have taken the time to clean up the code for readability as well as optimize any issues I had not thought about beforehand when first creating the project. I have also taken the opportunity to go about rewriting the application with TypeScript and Tailwind CSS, as well as deploying the application. However, rewriting and deployment are both still a work in progress.

## Features
- **User Registration/Authentication:** Users can register new accounts and log into/out of existing accounts. Implemented using `express-session` and `bcrypt` libraries to support secure account management. Users can also browse as a guest with limited permissions.
- **Posting:** Registered users can post questions, answers, and comments to the forum. They can also include tags underneath questions.
- **Searching:** Users can search for questions using keywords or tag names.
- **Updating/deleting:** Users can update/delete their posted questions/answers. They can also edit tags that they have created, as long as they aren't in use by other users. Registered admins also have these permissions over every user in the system.
- **Voting:** Registered users can upvote/downvote questions, answers, and comments.

## Changelog
### 6/5/24
- Reconfigured client directory to use Vite as application bundler and include TypeScript support.
- Migrated and updated model schemas from original project in `server/src/models`.
### 6/4/24
- Configured directories and repository.