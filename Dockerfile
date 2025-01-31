# Use an official web server image (e.g., Nginx)
FROM nginx:alpine

# Copy the HTML file
COPY index.html /usr/share/nginx/html/

# Copy the JavaScript folder
COPY js/ /usr/share/nginx/html/js/

# Copy the CSS folder
COPY css/ /usr/share/nginx/html/css/

# Copy the images folder
COPY images/ /usr/share/nginx/html/images/

# Expose port 80 (default HTTP port)
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]