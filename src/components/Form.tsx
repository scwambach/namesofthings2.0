"use client";
import {
  Button,
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

export const Form = ({
  genres,
  typesOfThings,
}: {
  genres: GenreProps[];
  typesOfThings: string[];
}) => {
  const { data: session } = useSession();

  const [addNew, setAddNew] = useState(false);
  const [description, setDescription] = useState<any>();
  const [genre, setGenre] = useState<any>();
  const [submitting, setSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [typeOfName, setTypeOfName] = useState("");
  const [user, setUser] = useState("");
  const [status, setStatus] = useState<"Error" | "Success" | "Ready">("Ready");

  const isMusic =
    typeOfName === "Band" || typeOfName === "Album" || typeOfName === "Song";

  useEffect(() => {
    setDarkModeActivation(false);
    if (session) {
      setUser(JSON.stringify(session.user));
    }
  }, [session]);

  type ApiResponse = {
    status: number;
    [key: string]: any; // for other potential properties in the response
  };

  const handleSubmit = async (): Promise<void> => {
    setSubmitting(true);

    const body = {
      title,
      description,
      typeOfName,
      genre,
      user,
    };

    const sendPostRequest = async (
      url: string,
      body: object
    ): Promise<Response> => {
      return await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
    };

    try {
      const [slackResponse, sanityPost] = await Promise.all([
        sendPostRequest("/api/slackSend", body),
        sendPostRequest("/api/sanityPost", body),
      ]);

      const data: ApiResponse = await slackResponse.json();

      setStatus(data.status === 200 ? "Success" : "Error");
    } catch (error) {
      console.error("Error occurred during submission:", error);
      setStatus("Error");
    } finally {
      setSubmitting(false);
    }
  };

  const clearAll = () => {
    setTypeOfName("");
    setTitle("");
    setDescription(undefined);
    setGenre(undefined);
    setAddNew(false);
  };

  return (
    <div className="flex justify-center gap-4 flex-col px-4 w-full max-w-[600px] mx-auto py-10">
      {submitting && (
        <div className="spinner">
          <PixelIcon name="pixelicon-sun" />
        </div>
      )}
      {session && status === "Ready" ? (
        <div className={submitting ? "loading" : ""}>
          <Text size="large" className="pb-10 flex items-center gap-4">
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
                  label="What kind of thing are you naming?*"
                  id="typeOfName"
                  value={typeOfName}
                  className="mb-0"
                  onChange={(e: string) => {
                    setTypeOfName(e);
                    if (!isMusic) {
                      setGenre(undefined);
                    }
                  }}
                />
              ) : (
                <Select
                  name="typeOfName"
                  className="m-0 w-full"
                  label="What kind of thing are you naming?*"
                  id="typeOfName"
                  value={typeOfName}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    setTypeOfName(e.target.value);
                    if (!isMusic) {
                      setGenre(undefined);
                    }
                  }}
                >
                  <option>--</option>
                  {typesOfThings.map((thing, index) => (
                    <option value={thing} key={`option_${thing} ${index}`}>
                      {thing}
                    </option>
                  ))}
                </Select>
              )}
            </div>

            <Button
              color={addNew ? "error" : "primary"}
              onClick={() => {
                setAddNew(!addNew);
              }}
            >
              {addNew ? "<- Back" : "Other +"}
            </Button>
          </div>
          <Input
            type="text"
            name="title"
            label="What are you gonna call it?*"
            id="title"
            value={title}
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
              value={genre}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setGenre(e.target.value);
              }}
            >
              <option>--</option>
              {genres.map((genre) => (
                <option key={genre._id} value={genre._id}>
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
            value={description}
            onChange={(e: string) => {
              setDescription(e);
            }}
          />
          <div className="flex items-center gap-4">
            <Button
              disabled={submitting || !title || !typeOfName || !user}
              color="success"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button color="warning" onClick={clearAll}>
              Clear
            </Button>
          </div>
        </div>
      ) : session && status === "Error" ? (
        <div>
          <span className="text-red-500">
            <Text size="xlarge" className="pb-10 flex items-center gap-4">
              Oops! You broke it!
              <br />
              <br />
              Try refreshing the page and trying again.
            </Text>
          </span>
        </div>
      ) : session && status === "Success" ? (
        <div>
          <span className="text-green-500">
            <Text size="xlarge" className="pb-10 flex items-center gap-4">
              You did it!
              <br />
              <br />
              You named a thing!
              <br />
              <br />
              Refresh the page to name another thing.
            </Text>
          </span>
        </div>
      ) : (
        <>
          <Text size="xlarge">You gotta login, okay...</Text>
        </>
      )}
    </div>
  );
};
