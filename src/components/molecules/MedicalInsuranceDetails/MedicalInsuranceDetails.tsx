import { useTranslations } from "next-intl";

export const MedicalInsuranceDetails = () => {
  const t = useTranslations("home.services.details.medicalInsurance");
  return (
    <div className="text-sm text-gray-700">
      <h3 className="text-xl font-semibold mb-3">{t("title")}</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>{t("itemOne")}</li>
        <li>{t("itemTwo")}</li>
        <li>{t("itemThree")}</li>
        <li>{t("itemFour")}</li>
        <li>{t("itemFive")}</li>
        <li>{t("itemSix")}</li>
        <li>{t("itemSeven")}</li>
        <li>{t("itemEight")}</li>
        <li>{t("itemNine")}</li>
        <li>{t("itemTen")}</li>
      </ul>
      <p className="mt-4">{t("resume")}</p>
    </div>
  );
};
