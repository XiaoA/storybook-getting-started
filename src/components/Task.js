import React from 'react';
import PropTypes from 'prop-types';

export default function Task( { task: { id, title, state}, onArchiveTask, onPinTask }) {
  return (
    <div className={ `list-item ${state}` }>
    <label
      htmlFor="checked"
      aria-label={`archiveTask-${id}`}
      className="checkbox"
    >
    <input
      type="checkbox"
      disabled={true}
      name="checked"
      id={`archiveTask-${id}`}
      checked={state === "TASK_ARCHIVED"}
    />
    <span
      className="checkbox-custom"
      onClick={() => onArchivetask(id)}
      />
    </label>

      <label htmlFor="title" aria-label={title} className="title">
      <input
        type="text"
        value={title}
        readOnly={true}
        name="title"
        placeholder="input title"
        />
      </label>

      {state !== "TASK_ARCHIVED" && (
        <button
        className="pin-button"
        onClick={() => onPintask(id)}
        id={`pinTask-${id}`}
        key={`pinTask-${id}`}
        >
        <span className={`icon-star`} />
        </button>
      )}
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.IsRequired,
    onArchiveTask: PropTypes.function,
    onPinTask: PropTypes.function
  })
}
