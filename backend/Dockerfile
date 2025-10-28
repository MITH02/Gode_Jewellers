# ===============================
# Stage 1: Build the Spring Boot app
# ===============================
FROM maven:3.9.6-eclipse-temurin-17 AS build

# Set working directory inside container
WORKDIR /app

# Copy Maven configuration and source code
COPY pom.xml .
COPY src ./src

# Package the application (skip tests for faster build)
RUN mvn clean package -DskipTests

# ===============================
# Stage 2: Run the application
# ===============================
FROM eclipse-temurin:17-jdk

# Set working directory inside container
WORKDIR /app

# Copy built JAR from previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose the default Spring Boot port (Render auto-maps PORT)
EXPOSE 8099

# Use environment PORT if provided, fallback to 8099
ENTRYPOINT ["java", "-jar", "app.jar"]
