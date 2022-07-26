# CIRCUS API Utility

This is an API client to connect to CIRCUS API Server.

This utility can make a generic authorized API requests using the following commands (although you have to construct a JSON reuqest body manually):

- get
- post
- put
- patch

This utility also has several specialized commands that can do the following:

- Download case data as MHD
- Add a new revision to a case
- Uploads/downloads blobs (label binary data)
- Show the all mylists belonging to the user

**Note:** This is an HTTP client that works by accessing CIRCUS API Server (REST API). CIRCUS also provides admin CLI, which is available only for server administrators. Some operations may work more efficiently via admin CLI because it does not use HTTP connections.

## Install

1. Install the latest [Node](https://nodejs.org/).

2. Run the following command (NPM should have been installed along with Node itself):

   ```
   npm install -g @utrad-ical/circus-api-util
   ```

   This will install the client globally, i.e., somewhere in your PATH.

   **Tip:** You can update the tool using the same command.

3. Run the following command to store an API token to your machine:

   ```
   circus-api-util auth
   ```

   You will be prompted to enter two values:

   - **API Endpoint**, e.g., "http://111.222.333.444/api/".
   - **API Token**, e.g., "3bac24b0c2f79085c5fceb15c7fffb9565a39062". This can be generated via the web UI.

   These data will be stored in the `.circusapirc` file in your home directory.

   **Tip:** Alternatively, you can export the following two environment variables:

   - `CIRCUS_API_TOKEN`
   - `CIRCUS_API_ENDPOINT`

4. Run the following command to check if the client can connect to a running CIRCUS API server:

   ```
   circus-api-util get login-info
   ```

   This displays the basic information about the user associated with the API token. If it fails, return to the previous step and check if the given values are correct.

5. You can see the list of commands like this:

   ```
   circus-api-util --help
   ```

   You can see the detailed description of each command like this:

   ```
   circus-api-util help <COMMAND>
   ```
