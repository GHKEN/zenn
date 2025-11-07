import { useFieldArray, useForm } from "react-hook-form";

type User = {
	userId: number; // idからuserIdに変更（推奨）
	name: string;
	email: string;
};

type FormData = {
	users: User[];
};

export default function UserIdSolution() {
	const { control, handleSubmit, register } = useForm<FormData>({
		defaultValues: {
			users: [
				{ userId: 1, name: "太郎", email: "taro@example.com" },
				{ userId: 2, name: "花子", email: "hanako@example.com" },
				{ userId: 3, name: "次郎", email: "jiro@example.com" },
			],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "users",
		// keyNameの指定は不要（デフォルトのidを使用）
	});

	const onSubmit = (data: FormData) => {
		console.log("送信データ:", data);
		alert("コンソールを確認してください - userIdが正しく保持されています！");
	};

	return (
		<div className="demo">
			<div className="description">
				<h2>✅ 解決策2: userIdに変更（推奨）</h2>
				<p>
					データ構造を変更できる場合、<code>id</code> の代わりに{" "}
					<code>userId</code> を使用します。
				</p>
				<p>
					これが最もシンプルで推奨される方法です。
					<code>useFieldArray</code> の設定変更も不要で、 通常通り{" "}
					<code>field.id</code> を <code>key</code> に使用できます。
				</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				{fields.map((field, index) => (
					<div key={field.id} className="field-row">
						{/* 通常通りfield.idをkeyに使用 */}
						<div className="field-info">
							<strong>field.id（useFieldArray用）:</strong>{" "}
							<code className="highlight-ok">{field.id}</code>
							<br />
							<strong>field.userId（元のID）:</strong>{" "}
							<code className="highlight-ok">{field.userId}</code>
						</div>

						<div className="form-fields">
							<input {...register(`users.${index}.userId`)} type="hidden" />
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
							userId: Date.now(),
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
