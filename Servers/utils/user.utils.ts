/**
 * @file user.utils.ts
 * @description This file contains utility functions for performing CRUD operations on the 'users' table in the database.
 *
 * The functions included are:
 * - `getAllUsersQuery`: Fetches all users from the database.
 * - `getUserByEmailQuery`: Fetches a user by their email address.
 * - `getUserByIdQuery`: Fetches a user by their ID.
 * - `createNewUserQuery`: Creates a new user in the database.
 * - `resetPasswordQuery`: Resets the password for a user identified by their email.
 * - `updateUserByIdQuery`: Updates user details by their ID.
 * - `deleteUserByIdQuery`: Deletes a user by their ID.
 *
 * Each function interacts with the database using SQL queries and returns the result.
 *
 * @module utils/user.utils
 */

import { User } from "../models/User";
import pool from "../database/db";

/**
 * Retrieves all users from the database.
 *
 * This function executes a SQL query to select all records from the `users` table.
 * It returns a promise that resolves to an array of `User` objects.
 *
 * @returns {Promise<User[]>} A promise that resolves to an array of `User` objects.
 *
 * @example
 * // Example usage:
 * getAllUsersQuery().then(users => {
 *   console.log(users);
 * }).catch(error => {
 *   console.error(error);
 * });
 *
 * @throws {Error} If there is an error executing the SQL query.
 */
export const getAllUsersQuery = async (): Promise<User[]> => {
  console.log("getAllUsers");
  const users = await pool.query("SELECT * FROM users");
  return users.rows;
};

/**
 * Retrieves a user from the database by their email address.
 *
 * @param {string} email - The email address of the user to retrieve.
 * @returns {Promise<User>} A promise that resolves to the user object.
 *
 * @example
 * const user = await getUserByEmailQuery('example@example.com');
 * console.log(user);
 *
 * @throws {Error} If there is an issue with the database query.
 */
export const getUserByEmailQuery = async (email: string): Promise<User> => {
  console.log("getUserByEmail");
  const user = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return user.rows[0];
};

/**
 * Retrieves a user from the database by their unique identifier.
 *
 * @param {string} id - The unique identifier of the user.
 * @returns {Promise<User>} A promise that resolves to the user object.
 *
 * @throws {Error} If the query fails or the user is not found.
 *
 * @example
 * ```typescript
 * const userId = "12345";
 * getUserByIdQuery(userId)
 *   .then(user => {
 *     console.log(user);
 *   })
 *   .catch(error => {
 *     console.error(error);
 *   });
 * ```
 */
export const getUserByIdQuery = async (id: string): Promise<User> => {
  console.log("getUserById");
  const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return user.rows[0];
};

/**
 * Creates a new user in the database.
 *
 * @param user - An object containing the user details, excluding the user ID.
 * @returns A promise that resolves to the newly created user object.
 *
 * @example
 * ```typescript
 * const newUser = await createNewUserQuery({
 *   name: "John Doe",
 *   email: "john.doe@example.com",
 *   password_hash: "hashed_password",
 *   role: "user",
 *   created_at: new Date(),
 *   last_login: new Date()
 * });
 * console.log(newUser);
 * ```
 *
 * @throws Will throw an error if the database query fails.
 */
export const createNewUserQuery = async (
  user: Omit<User, "id">
): Promise<User> => {
  const { name, email, password_hash, role, created_at, last_login } = user;
  const result = await pool.query(
    `INSERT INTO users (name, email, password_hash, role, created_at, last_login)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [name, email, password_hash, role, created_at, last_login]
  );
  return result.rows[0];
};

/**
 * Resets the password for a user identified by their email.
 *
 * @param email - The email address of the user whose password is to be reset.
 * @param newPassword - The new password to be set for the user.
 * @returns A promise that resolves to the updated user object.
 *
 * @throws Will throw an error if the database query fails.
 */
export const resetPasswordQuery = async (
  email: string,
  newPassword: string
): Promise<User> => {
  const result = await pool.query(
    `UPDATE users SET password_hash = $1 WHERE email = $2 RETURNING *`,
    [newPassword, email]
  );
  return result.rows[0];
};

/**
 * Updates a user in the database by their ID.
 *
 * @param {string} id - The ID of the user to update.
 * @param {Partial<User>} user - An object containing the user properties to update.
 *                               Only the provided properties will be updated.
 * @returns {Promise<User>} A promise that resolves to the updated user object.
 *
 * @example
 * const updatedUser = await updateUserByIdQuery('123', {
 *   name: 'John Doe',
 *   email: 'john.doe@example.com',
 *   password_hash: 'newhashedpassword',
 *   role: 'admin',
 *   last_login: new Date()
 * });
 * console.log(updatedUser);
 */
export const updateUserByIdQuery = async (
  id: string,
  user: Partial<User>
): Promise<User> => {
  const { name, email, password_hash, role, last_login } = user;
  const result = await pool.query(
    `UPDATE users SET name = $1, email = $2, password_hash = $3, role = $4, last_login = $5
     WHERE id = $6 RETURNING *`,
    [name, email, password_hash, role, last_login, id]
  );
  return result.rows[0];
};

/**
 * Deletes a user from the database by their ID.
 *
 * This function executes a SQL DELETE query to remove a user from the 'users' table
 * based on the provided user ID. It returns the deleted user's data.
 *
 * @param {string} id - The unique identifier of the user to be deleted.
 * @returns {Promise<User>} A promise that resolves to the deleted user's data.
 *
 * @throws {Error} If the query fails or the user does not exist.
 */
export const deleteUserByIdQuery = async (id: string): Promise<User> => {
  const result = await pool.query(
    "DELETE FROM users WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};