import { type FieldArrayWithId, useFieldArray, useForm } from "react-hook-form";

type User = {
	id: number;
	name: string;
	email: string;
};

type FormData = {
	users: User[];
};

export default function KeyNameSolution() {
	const { control, handleSubmit, register } = useForm<FormData>({
		defaultValues: {
			users: [
				{ id: 1, name: "太郎", email: "taro@example.com" },
				{ id: 2, name: "花子", email: "hanako@example.com" },
				{ id: 3, name: "次郎", email: "jiro@example.com" },
			],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "users",
		keyName: "_id", // 内部管理用のキー名を変更
	});

	const onSubmit = (data: FormData) => {
		console.log("送信データ:", data);
		alert("コンソールを確認してください - 元のidが保持されています！");
	};

	return (
		<div className="demo">
			<div className="description">
				<h2>✅ 解決策1: keyNameオプションを使用</h2>
				<p>
					<code>keyName: "_id"</code> を指定することで、内部管理用のキーを
					<code>_id</code> に変更します。
				</p>
				<p>
					これにより、元の <code>id</code> フィールドが保持されます。
					<br />
					React の <code>key</code> プロパティには <code>field._id</code>{" "}
					を使用する必要があります。
				</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				{fields.map((field, index) => {
					const internalId = (
						field as FieldArrayWithId<FormData, "users", "_id">
					)._id;
					return (
						<div key={internalId} className="field-row">
							<div className="field-info">
								<strong>field._id:</strong>{" "}
								<code className="highlight-ok">{internalId}</code>
								<br />
								<strong>field.id（元のID）:</strong>{" "}
								<code className="highlight-ok">{field.id}</code>
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
					);
				})}

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
