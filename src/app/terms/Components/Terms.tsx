import "./Terms.css";

export default function TermSection() {
    return (
      <section className="pt-16 pb-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-auto">
              <span className="text-sm font-medium text-blue-600 uppercase">CERTIFICATE</span>
              <h2 className="text-3xl font-bold mb-4 pb-2">Lorem ipsum</h2>
              <div className="mb-4 xl:mb-5">
                <ul className="list-disc list-inside space-y-2">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</li>
                </ul>
              </div>
            </div>
          </div>
  
          <h5 className="text-xl font-semibold border-title2 mb-4 pb-1">Overview</h5>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
  
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
  
          <h5 className="text-xl font-semibold border-title2 mb-3 pb-2">Core Courses</h5>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
  
          <h5 className="text-xl font-semibold border-title2 mb-3">Additional Courses</h5>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
  
          <h5 className="text-xl font-semibold border-title2 mb-3">Program Features</h5>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ul className="list-disc list-inside space-y-2">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
  
          <h5 className="text-xl font-semibold border-title2 mb-4">Requirements</h5>
          <p className="mb-4 pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            <b>
              <span className="text-blue-600">Lorem ipsum dolor:</span> Lorem ipsum dolor sit amet.
            </b>
          </p>
  
          <h5 className="text-xl font-semibold border-title2 mb-4">Internships</h5>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
    );
  }
  