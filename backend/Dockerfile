# ===============================
# Stage 1: Build the Spring Boot app
# ===============================
FROM maven:3.9.6-eclipse-temurin-17 AS build

# Set working directory inside container
WORKDIR /app

# Copy Maven configuration and source code
COPY pom.xml ./
COPY src ./src

# Package the application (skip tests for faster build)
RUN mvn clean package -DskipTests

# ===============================
# Stage 2: Run the application
# ===============================
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy built JAR from the previous stage
COPY --from=build /app/target/*.jar app.jar

# ✅ Render dynamically assigns PORT
ENV PORT=8099

# ✅ Tell Docker which port the app will use
EXPOSE ${PORT}

# ✅ Pass the Render-assigned PORT to Spring Boot at runtime
ENTRYPOINT ["sh", "-c", "java -jar app.jar --server.port=${PORT}"]
