import { useTranslations } from "next-intl";

export const MedicalInsuranceDetails = () => {
  const t = useTranslations("home.services.details.medicalInsurance");
  return (
    <div className="text-sm text-gray-700">
      <p className="mt-4">{t("description")}</p>
    </div>
  );
};
