import { create } from "apisauce";

const apiClient = create({
	baseURL: "http://192.168.18.3:9000/api",
});

apiClient.get("/listings").then((res) => {
	if (!res.ok) res.problem;
});