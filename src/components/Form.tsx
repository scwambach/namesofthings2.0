"use client";
import { useAuth } from "./AuthProvider";
import { normalizeAuthUser } from "@utils/normalizeAuthUser";
import { useEffect, useState } from "react";
import { GenreProps } from "@utils/types";
import { accents, ink, muted } from "@styles/palette";

const labelClass =
  "text-xs tracking-wider uppercase font-semibold mb-2.5 block";
const underlineInputClass =
  "w-full box-border border-0 border-b-[1.5px] border-black bg-transparent py-2 px-0.5 text-lg font-semibold outline-none";
const pillClass =
  "px-4 py-2 border border-black text-[13px] tracking-wide uppercase font-semibold cursor-pointer";

export const Form = ({
  genres,
  typesOfThings,
}: {
  genres: GenreProps[];
  typesOfThings: string[];
}) => {
  const { user: authUser } = useAuth();

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
    if (authUser) {
      setUser(JSON.stringify(normalizeAuthUser(authUser)));
    }
  }, [authUser]);

  type ApiResponse = {
    status: number;
    [key: string]: any; // for other potential properties in the response
  };

  const handleSubmit = async (): Promise<void> => {
    if (!authUser) {
      window.alert("You need to log in before you can submit a name.");
      return;
    }

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
      const [slackResponse] = await Promise.all([
        sendPostRequest("/api/slackSend", body),
        sendPostRequest("/api/addThing", body),
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
    <div className="w-full max-w-[640px] mx-auto px-5 sm:px-10">
      {submitting && <div className="spinner" />}

      {status === "Ready" ? (
        <form
          className={`${submitting ? "loading" : ""} border border-black my-10`}
        >
          <div className="px-9 py-6 border-b border-black text-center">
            <div
              className="text-xs tracking-wider uppercase font-semibold mb-2"
              style={{ color: accents[0] }}
            >
              Entry Form No. 047
            </div>
            <div className="text-[13px] leading-relaxed">
              Submit a Name for Consideration
            </div>
          </div>

          <div className="p-6 sm:p-9 flex flex-col gap-8">
            <div>
              <div className={labelClass} style={{ color: muted }}>
                I. Category
              </div>
              {addNew ? (
                <div className="flex items-end gap-3 flex-wrap">
                  <input
                    type="text"
                    name="typeOfName"
                    id="typeOfName"
                    placeholder="Name your own category"
                    value={typeOfName}
                    className={`${underlineInputClass} flex-1 min-w-[180px]`}
                    onChange={(e) => {
                      setTypeOfName(e.target.value);
                      setGenre(undefined);
                    }}
                  />
                  <button
                    type="button"
                    className={pillClass}
                    onClick={() => {
                      setAddNew(false);
                      setTypeOfName("");
                      setGenre(undefined);
                    }}
                  >
                    &larr; Back
                  </button>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {typesOfThings.map((thing, index) => {
                    const selected = typeOfName === thing;
                    const swatch = accents[index % accents.length];
                    return (
                      <button
                        type="button"
                        key={thing}
                        className={pillClass}
                        style={{
                          background: selected ? swatch : "transparent",
                          color: selected ? "#FFFFFF" : ink,
                        }}
                        onClick={() => {
                          setTypeOfName(thing);
                          if (
                            thing !== "Band" &&
                            thing !== "Album" &&
                            thing !== "Song"
                          ) {
                            setGenre(undefined);
                          }
                        }}
                      >
                        {thing}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    className={pillClass}
                    onClick={() => setAddNew(true)}
                  >
                    Other +
                  </button>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="title" className={labelClass} style={{ color: muted }}>
                II. Proposed Name
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="e.g. Space Vegas"
                value={title}
                className={underlineInputClass}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {isMusic && (
              <div>
                <label htmlFor="genre" className={labelClass} style={{ color: muted }}>
                  III. Genre, if Applicable
                </label>
                <select
                  name="genre"
                  id="genre"
                  value={genre ?? ""}
                  className={`${underlineInputClass} cursor-pointer`}
                  onChange={(e) => setGenre(e.target.value)}
                >
                  <option value="">Select one</option>
                  {genres.map((g) => (
                    <option key={g.id} value={g.title}>
                      {g.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label htmlFor="description" className={labelClass} style={{ color: muted }}>
                IV. Remarks
              </label>
              <textarea
                rows={3}
                name="description"
                id="description"
                placeholder="Tell me a little about it..."
                value={description ?? ""}
                className="w-full box-border border border-black bg-transparent p-3 text-[15px] resize-y outline-none"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-black flex-wrap gap-4">
              <button
                type="button"
                className="text-xs tracking-wider uppercase font-semibold underline"
                style={{ color: muted }}
                onClick={clearAll}
              >
                Clear
              </button>
              <button
                type="button"
                disabled={submitting || !title || !typeOfName}
                className="px-8 py-3 border-[1.5px] border-black bg-black text-white text-[13px] tracking-widest uppercase font-bold disabled:opacity-40"
                onClick={handleSubmit}
              >
                Submit for Record
              </button>
            </div>
          </div>
        </form>
      ) : status === "Error" ? (
        <div className="py-20 text-center">
          <p className="text-base leading-relaxed" style={{ color: accents[0] }}>
            Oops! You broke it!
          </p>
          <p className="mt-4">Try refreshing the page and trying again.</p>
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-base leading-relaxed" style={{ color: accents[2] }}>
            You did it!
          </p>
          <p className="mt-4">
            You named a thing! Refresh the page to name another thing.
          </p>
        </div>
      )}
    </div>
  );
};
