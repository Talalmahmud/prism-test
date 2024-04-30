"use server";

import prisma from "@/utils/db";

export const addUser = async () => {
  const newUser = await prisma.user.create({
    data: {
      name: " Talal Mahmud",
      email: "talal@gmail.com",
      password: "92387498309",
    },
  });
};

export const addPost = async () => {
  const newUser = await prisma.post.create({
    data: {
      title: " post ",
      content: "this is the first post",
      authorId: 1,
    },
  });
};

export const addComment = async () => {
  const newUser = await prisma.comment.create({
    data: {
      content: "this is the first post",
      postId: 1,
      authorId: 1,
    },
  });
};

export const getUser = async () => {
  const userData = await prisma.user.findMany();
  return userData;
};
