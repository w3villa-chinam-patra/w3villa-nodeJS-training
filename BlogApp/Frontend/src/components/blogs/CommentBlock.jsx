import React from "react";

function CommentBlock({ commentData }) {
  return (
    <div className="bg-neutral-200 text-sm text-neutral-700 border border-neutral-300 py-2 pl-4 pr-6 rounded-b-full rounded-tr-full">
      <div className="text-xs mb-1 text-black font-bold">{commentData.user.name}</div>
      {commentData.content}
    </div>
  );
}

export default CommentBlock;
