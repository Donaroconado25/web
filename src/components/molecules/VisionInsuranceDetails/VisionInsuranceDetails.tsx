import { useTranslations } from "next-intl";

export const VisionInsuranceDetails = () => {
  const t = useTranslations("home.services.details.visionInsurance");
  return (
    <div className="text-sm text-gray-700">
      <h3 className="text-xl font-semibold mb-3">{t("title")}</h3>
      <p className="mb-4">{t("description")}</p>
    </div>
  );
};
