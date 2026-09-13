const STORAGE_KEY = "fz2i-progress-v1";

function defaultProgress() {
  return { name: "", milestones: {}, phaseExam: {}, leerstof: {}, inzicht: 0, misses: {}, admin: false };
}

function readProgress() {
  try {
    return { ...defaultProgress(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return defaultProgress();
  }
}

function progressReducer(state, action) {
  if (!state) state = readProgress();
  switch (action.type) {
    case "MILESTONE_RESULT": {
      const { id, score, total, passed } = action.payload;
      return {
        ...state,
        milestones: {
          ...state.milestones,
          [id]: { score, total, passed, at: Date.now() }
        }
      };
    }
    case "PHASE_EXAM_RESULT": {
      const { phaseId, score, total, passed } = action.payload;
      return {
        ...state,
        phaseExam: {
          ...state.phaseExam,
          [String(phaseId)]: { score, total, passed, at: Date.now() }
        }
      };
    }
    case "COLLECT_LEERSTOF": {
      const id = action.payload;
      if (!id || state.leerstof[id]) return state;
      return { ...state, leerstof: { ...state.leerstof, [id]: Date.now() } };
    }
    case "INZICHT_ADD": {
      const n = Number(action.payload) || 0;
      return { ...state, inzicht: Math.max(0, (state.inzicht || 0) + n) };
    }
    case "MISS_CONCEPT": {
      const key = action.payload;
      const misses = { ...(state.misses || {}) };
      misses[key] = (misses[key] || 0) + 1;
      return { ...state, misses: misses };
    }
    case "RESET_PROGRESS":
      return { ...defaultProgress(), admin: Boolean(state.admin) };
    case "ADMIN_LOGIN":
      return { ...state, admin: true };
    case "ADMIN_LOGOUT":
      return { ...state, admin: false };
    default:
      return state;
  }
}

function createFallbackStore(reducer, preloaded) {
  let current = preloaded;
  const listeners = [];
  return {
    getState() { return current; },
    dispatch(action) {
      current = reducer(current, action);
      listeners.forEach((fn) => fn());
      return action;
    },
    subscribe(fn) {
      listeners.push(fn);
      return () => {
        const i = listeners.indexOf(fn);
        if (i >= 0) listeners.splice(i, 1);
      };
    }
  };
}

const preloaded = readProgress();
const store = (typeof Redux !== "undefined" && Redux.createStore)
  ? Redux.createStore(progressReducer, preloaded)
  : createFallbackStore(progressReducer, preloaded);

store.subscribe(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState()));
});
