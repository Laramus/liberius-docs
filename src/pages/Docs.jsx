import CodeBlock from "../component/CodeBlock";
import SideBar from "../component/SideBar";

function Docs() {
  return (
    <div>
      <div className="flex">
        <SideBar/>
        <main className="p-6">
          <h1 className="text-4xl font-bold">Installation</h1>

          <div className="ml-4 mt-7">
            <h2 className="mb-4 text-2xl font-semibold"># What is Liberius?</h2>
            <p className="font-thin text-gray-500 w-[78%]">
              Liberius Framework
              Light php Framework collaborate with javascript runtime NODEJS. 
              CLI based on javascript.
            </p>
          </div>

          <div className="ml-4 mt-7">
            <h2 className="mb-4 text-2xl font-semibold">
              # Your First Liberius App
            </h2>
            <p className="font-thin text-gray-500 w-[78%]">
              Before creating your first Liberius project, you should ensure that
              your local machine has PHP and Composer installed. If you are
              developing on macOS, PHP and Composer can be installed within
              minutes via Laravel Herd. In addition, we recommend installing
              Node and NPM. <br />
              <br />
              After you have installed PHP and Composer, you may create a new
              Liberius project via the Composer create-project command:
            </p>

            <br />

            <p className="font-thin text-gray-500 w-[78%]">
              Or, you may create new Liberius projects by globally installing the
              Liberius installer via Composer. Or, if you installed PHP and
              Composer via Laravel Herd, the Liberius installer is already
              available to you:
            </p>

            <CodeBlock code="npm i -g omirus-library" />
            <CodeBlock code="omirus create-app Laramus/Liberius" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Docs;
