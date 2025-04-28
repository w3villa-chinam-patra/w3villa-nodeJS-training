import React from "react";

function CommentBlock({ commentData }) {
  return (
    <div className="bg-neutral-50 text-sm text-neutral-700 border border-neutral-300 pt-1 pb-3 pl-4 pr-6 rounded-b-full rounded-tr-full">
      <div className="text-xs  pr-16 text-black font-bold">
        {commentData.user.name}
      </div>
      <div>{commentData.content}</div>
    </div>
  );
}

export default CommentBlock;
