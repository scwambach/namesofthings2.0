"use client";
import {
  Input,
  PixelIcon,
  Select,
  setDarkModeActivation,
  Text,
  TextArea,
} from "nes-ui-react";
import { useSession } from "next-auth/react";
import { ChangeEvent, useEffect, useState } from "react";

export interface GenreProps {
  _type: string;
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
}

export const Login = ({ genres }: { genres: GenreProps[] }) => {
  const [typeOfName, setTypeOfName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");

  const isMusic =
    typeOfName === "Band" || typeOfName === "Album" || typeOfName === "Song";

  const { data: session } = useSession();
  useEffect(() => {
    setDarkModeActivation(false);
  }, []);

  return (
    <div className="flex justify-center gap-4 flex-col px-4 w-full max-w-[500px] mx-auto pt-32">
      {session ? (
        <div>
          <Text size="xlarge" className="pb-10 flex items-center gap-4">
            <PixelIcon name="pixelicon-sun" />
            Name Something
          </Text>

          <Select
            name="typeOfName"
            className="m-0 w-full"
            label="What kind of thing are you naming?"
            id="typeOfName"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setTypeOfName(e.target.value);
            }}
          >
            <option>--</option>
            <option value="Band">Band</option>
            <option value="Album">Album</option>
            <option value="Song">Song</option>
            <option value="Podcast">Podcast</option>
          </Select>
          <Input
            type="text"
            name="title"
            label="What are you gonna call it?"
            id="title"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
          {isMusic && (
            <Select
              name="typeOfName"
              className="m-0 w-full"
              label="What kind of music is it?"
              id="typeOfName"
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setGenre(e.target.value);
              }}
            >
              <option>--</option>
              {genres.map((genre) => (
                <option key={genre._id} value={genre.title}>
                  {genre.title}
                </option>
              ))}
            </Select>
          )}
          <TextArea
            rows={5}
            name="description"
            label="Tell me a little about it..."
            id="description"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setDescription(e.target.value);
            }}
          />
        </div>
      ) : (
        <>
          <Text size="xlarge">You gotta login, okay...</Text>
        </>
      )}
    </div>
  );
};
