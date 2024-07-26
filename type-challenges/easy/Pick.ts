type MyPick<Obj, Keys extends keyof Obj> = {
  [Sp in Keys]: Obj[Sp];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const toDo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
