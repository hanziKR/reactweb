import React from "react";

interface IUrlButtonProps {
  url: string;
  alt?: string | JSX.Element;
  blank?: boolean;
}

function UrlButton(props: IUrlButtonProps): JSX.Element {
  return (
    <a
      className="lightFocus"
      href={props.url}
      target={props.blank ? "_blank" : ""}
      rel="noreferrer"
    >
      {props.alt ? props.alt : props.url}
    </a>
  );
}

export { UrlButton };
