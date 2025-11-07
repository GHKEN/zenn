import { useState } from "react";
import "./App.css";
import KeyNameSolution from "./components/KeyNameSolution";
import ProblemDemo from "./components/ProblemDemo";
import UserIdSolution from "./components/UserIdSolution";

type Tab = "problem" | "keyName" | "userId";

function App() {
	const [activeTab, setActiveTab] = useState<Tab>("problem");

	return (
		<div className="app">
			<h1>react-hook-form useFieldArray の id 問題デモ</h1>

			<div className="tabs">
				<button
					type="button"
					className={activeTab === "problem" ? "active" : ""}
					onClick={() => setActiveTab("problem")}
				>
					問題の再現
				</button>
				<button
					type="button"
					className={activeTab === "keyName" ? "active" : ""}
					onClick={() => setActiveTab("keyName")}
				>
					解決策1: keyName
				</button>
				<button
					type="button"
					className={activeTab === "userId" ? "active" : ""}
					onClick={() => setActiveTab("userId")}
				>
					解決策2: userId（推奨）
				</button>
			</div>

			<div className="tab-content">
				{activeTab === "problem" && <ProblemDemo />}
				{activeTab === "keyName" && <KeyNameSolution />}
				{activeTab === "userId" && <UserIdSolution />}
			</div>
		</div>
	);
}

export default App;
