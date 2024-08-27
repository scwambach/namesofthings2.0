"use client";
import {
  Button,
  Col,
  Input,
  PixelIcon,
  Row,
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

export const Login = ({
  genres,
  typesOfThings,
}: {
  genres: GenreProps[];
  typesOfThings: string[];
}) => {
  const { data: session } = useSession();

  const [typeOfName, setTypeOfName] = useState("");
  const [addNew, setAddNew] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [user, setUser] = useState(JSON.stringify(session?.user));

  const isMusic =
    typeOfName === "Band" || typeOfName === "Album" || typeOfName === "Song";

  useEffect(() => {
    setDarkModeActivation(false);
  }, []);

  return (
    <div className="flex justify-center gap-4 flex-col px-4 w-full max-w-[600px] mx-auto pt-20">
      {session ? (
        <div>
          <Text size="xlarge" className="pb-10 flex items-center gap-4">
            <PixelIcon name="pixelicon-sun" />
            Name Something
          </Text>
          <div className="flex justify-between gap-4 items-end">
            <div
              className="typeOfName"
              style={{
                width: "calc(100% - 125px)",
              }}
            >
              {addNew ? (
                <Input
                  type="text"
                  name="typeOfName"
                  label="What kind of thing are you naming?"
                  id="typeOfName"
                  className="mb-0"
                  onChange={(e: string) => {
                    setTypeOfName(e);
                  }}
                />
              ) : (
                <Select
                  name="typeOfName"
                  className="m-0 w-full"
                  label="What kind of thing are you naming?"
                  id="typeOfName"
                  value={typeOfName}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    setTypeOfName(e.target.value);
                  }}
                >
                  <option>--</option>
                  {typesOfThings.map((thing) => (
                    <option value={thing} key={thing}>
                      {thing}
                    </option>
                  ))}
                </Select>
              )}
            </div>

            <Button
              onClick={() => {
                setAddNew(!addNew);
              }}
            >
              {addNew ? "<- List" : "Add New"}
            </Button>
          </div>
          <Input
            type="text"
            name="title"
            label="What are you gonna call it?"
            id="title"
            onChange={(e: string) => {
              setTitle(e);
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
            onChange={(e: string) => {
              setDescription(e);
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
