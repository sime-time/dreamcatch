import { Title } from "@solidjs/meta";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1 class="font-bold">Hello world!</h1>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
