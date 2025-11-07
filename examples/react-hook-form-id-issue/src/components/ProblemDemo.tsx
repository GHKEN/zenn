import { useFieldArray, useForm } from "react-hook-form";

type User = {
	id: number;
	name: string;
	email: string;
};

type FormData = {
	users: User[];
};

const INITIAL_DATA = [
	{ id: 1, name: "太郎", email: "taro@example.com" },
	{ id: 2, name: "花子", email: "hanako@example.com" },
	{ id: 3, name: "次郎", email: "jiro@example.com" },
];

export default function ProblemDemo() {
	const { control, handleSubmit, register } = useForm<FormData>({
		defaultValues: {
			users: INITIAL_DATA,
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "users",
	});

	const onSubmit = (data: FormData) => {
		console.log("送信データ:", data);
		alert("コンソールを確認してください");
	};

	return (
		<div className="demo">
			<div className="description">
				<h2>❌ 問題: idが上書きされる</h2>
				<p>
					元のデータには <code>id: 1, 2, 3</code> が含まれていますが、
					<code>useFieldArray</code>が内部管理用の<code>id</code>
					で上書きしてしまいます。
				</p>
				<p>
					<strong>元の配列:</strong>
				</p>
				<pre
					style={{ background: "#f5f5f5", padding: "0.5rem", overflow: "auto" }}
				>
					{JSON.stringify(INITIAL_DATA, null, 2)}
				</pre>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				{fields.map((field, index) => (
					<div key={field.id} className="field-row">
						<div className="field-info">
							<strong>useFieldArrayが返したfield.id:</strong>{" "}
							<code className="highlight-problem">{field.id}</code>
							<br />
							<strong>field全体:</strong>{" "}
							<code style={{ fontSize: "0.8em" }}>{JSON.stringify(field)}</code>
						</div>

						<div className="form-fields">
							<input {...register(`users.${index}.id`)} type="hidden" />
							<input
								{...register(`users.${index}.name`)}
								placeholder="名前"
								className="form-input"
							/>
							<input
								{...register(`users.${index}.email`)}
								placeholder="メールアドレス"
								className="form-input"
							/>
							<button
								type="button"
								onClick={() => remove(index)}
								className="btn-remove"
							>
								削除
							</button>
						</div>
					</div>
				))}

				<button
					type="button"
					onClick={() =>
						append({
							id: Date.now(),
							name: "",
							email: "",
						})
					}
					className="btn-add"
				>
					ユーザーを追加
				</button>

				<button type="submit" className="btn-submit">
					送信（コンソールを確認）
				</button>
			</form>
		</div>
	);
}
