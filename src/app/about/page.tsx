import Image from "next/image";

const About = () => {
  return (
    <div className= "py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-xl text-gray-700 mb-12">
          Welcome to our furniture store, where quality meets style! We specialize in creating timeless and beautiful pieces that will transform your living spaces.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-6 bg-lightYellow p-4">
            <h2 className="text-2xl font-semibold text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-600">
              Founded with a passion for design and craftsmanship, our company has been dedicated to bringing the finest furniture pieces to homes across the world. From classic styles to contemporary designs, we offer a wide range of furniture to suit every taste and lifestyle.
            </p>
            <p className="text-lg text-gray-600">
              Our goal is to provide exceptional customer service and create furniture that not only looks amazing but lasts a lifetime.
            </p>
          </div>

          {/* Right Section (Image) */}
          <div className="flex justify-center items-center">
            <Image
              src="/3d-furniture-modern-grey-double-bed-isolated-on-a-white-background-with-clipping-path-decoration-design-for-bedroom-photo.jpg"  // Update with your image path
              alt="Furniture Collection"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            At our core, we believe in creating furniture that brings comfort, functionality, and beauty into your home. Our mission is to make high-quality, affordable furniture available to everyone, no matter their style or budget.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We’re committed to sustainability, using responsibly sourced materials, and designing products with longevity in mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
