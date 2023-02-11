import React, { useState } from "react";
import "./App.css";

async function callApi<T = any>({
  url,
  method,
}: {
  url: string;
  method: string;
  body?: any;
}) {
  const res = await fetch(url, { method });
  const json = await res?.json();

  if (!res.ok) {
    throw {
      statusText: res.statusText,
      json,
    };
  }

  return json as T;
}

async function PostApi<T = any>({
  url,
  method,
  body,
}: {
  url: string;
  method: string;
  body?: any;
}) {
  const res = await fetch(url, { method, body });
  const json = await res?.json();

  if (!res.ok) {
    throw {
      statusText: res.statusText,
      json,
    };
  }

  return json as T;
}

function AppButton() {
  const [fetchResult, setFetchResult] = useState<string[]>([]);

  return (
    <>
      <button
        className="button-with-margin"
        onClick={async () => {
          try {
            const json = await PostApi<{ messages: string }>({
              url: "/todos",
              method: "POST",
              body: JSON.stringify({
                title: "밥먹기",
                isCompleted: true,
                date: Date.now(),
              }),
            });

            setFetchResult([...fetchResult, JSON.stringify(json.messages)]);
          } catch (e) {
            console.log("e", e);
          }
        }}
      >
        post test
      </button>
      <button
        className="button-with-margin"
        onClick={async () => {
          try {
            const json = await callApi<{ messages: string }>({
              url: "/todos",
              method: "get",
            });

            setFetchResult([...fetchResult, JSON.stringify(json.messages)]);
          } catch (e) {
            console.log("e", e);
          }
        }}
      >
        get test
      </button>
      <button
        className="button-with-margin"
        onClick={async () => {
          try {
            const json = await callApi<{ messages: string }>({
              url: "/todos",
              method: "put",
            });

            setFetchResult([...fetchResult, JSON.stringify(json.messages)]);
          } catch (e) {
            console.log("e", e);
          }
        }}
      >
        put test
      </button>
      <button
        className="button-with-margin"
        onClick={async () => {
          try {
            const json = await callApi<{ messages: string }>({
              url: "/todos",
              method: "delete",
            });

            setFetchResult([...fetchResult, JSON.stringify(json.messages)]);
          } catch (e) {
            console.log("e", e);
          }
        }}
      >
        delete test
      </button>
      <button
        className="button-with-margin clear"
        onClick={() => setFetchResult([])}
      >
        Clear!
      </button>
      <br />
      <br />
      {fetchResult?.length > 0 && (
        <ul className="fetch-result">
          {[...fetchResult].reverse().map((v, i) => (
            <li key={`${v}-${i}`}>{v}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default AppButton;
