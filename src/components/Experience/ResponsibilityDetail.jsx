import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaCertificate, FaUsers, FaPaintBrush, FaChartLine } from "react-icons/fa";
import { responsibilities } from "../../data/responsibilities";

const ResponsibilityDetail = () => {
  const { id } = useParams();
  const item = responsibilities.find((r) => String(r.id) === id);

  if (!item) {
    return (
      <div className="text-center mt-24 px-6">
        <h2 className="text-3xl font-bold text-black">Responsibility Not Found</h2>
        <p className="mt-4 text-gray-600">
          The page you are looking for doesn’t exist. Please go back to the responsibilities list.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="py-24 px-[6vw] md:px-[8vw] lg:px-[10vw] font-sans">
      <div className="max-w-4xl mx-auto bg-blue-100/40 border border-blue-300 rounded-3xl p-10 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-black">{item.role}</h2>
            <p className="text-blue-600 font-semibold mt-2">{item.organization}</p>
            <p className="text-sm text-black/70 mt-1">{item.date}</p>
          </div>

          <Link
            to="/#responsibility"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-white border border-blue-500 text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            <FaArrowLeft />
            Back to Experience
          </Link>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-black/80 leading-relaxed">{item.desc}</p>

            {item.detailsLink && (
              <a
                href={item.detailsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                <FaCertificate />
                {item.detailsLabel || "View Certificate"}
              </a>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                <FaUsers />
                <span>Involvement</span>
              </div>
              <p className="text-black/80 leading-relaxed">{item.extra?.involvement}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                <FaPaintBrush />
                <span>Design & Deliverables</span>
              </div>
              <p className="text-black/80 leading-relaxed">{item.extra?.designs}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                <FaChartLine />
                <span>Social / Growth</span>
              </div>
              <p className="text-black/80 leading-relaxed">{item.extra?.social}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsibilityDetail;
