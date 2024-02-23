import React from "react";
import TImg from "../img/about/boss.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Datenschutz = () => {
  return (
    <motion.section transition={transition1} className="    " id="about">
      <div className="   ">
        {/* text & img wrapper */}
        <div
          className=" flex relative
       "
        >
          {/* text */}
          <motion.div
            transition={transition1}
            className="  text-green-900 relative top-20 p-10 md:p-20  "
          >
            <h1 className="h1">Datenschutzerklärung</h1>
            <p className="mb-5">
              Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen.
              Datenschutz hat einen besonders hohen Stellenwert für die
              Geschäftsleitung der Konak Facility Management. Eine Nutzung der
              Internetseiten der Konak Facility Management ist grundsätzlich
              ohne jede Angabe personenbezogener Daten möglich. Sofern eine
              betroffene Person besondere Services unseres Unternehmens über
              unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine
              Verarbeitung personenbezogener Daten erforderlich werden. Ist die
              Verarbeitung personenbezogener Daten erforderlich und besteht für
              eine solche Verarbeitung keine gesetzliche Grundlage, holen wir
              generell eine Einwilligung der betroffenen Person ein.
            </p>
            <p className="mb-5">
              Die Verarbeitung personenbezogener Daten, beispielsweise des
              Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer
              betroffenen Person, erfolgt stets im Einklang mit der
              Datenschutz-Grundverordnung und in Übereinstimmung mit den für die
              Konak Facility Management geltenden landesspezifischen
              Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung
              möchte unser Unternehmen die Öffentlichkeit über Art, Umfang und
              Zweck der von uns erhobenen, genutzten und verarbeiteten
              personenbezogenen Daten informieren. Ferner werden betroffene
              Personen mittels dieser Datenschutzerklärung über die ihnen
              zustehenden Rechte aufgeklärt.
            </p>
            <p className="mb-5">
              Die Konak Facility Management hat als für die Verarbeitung
              Verantwortlicher zahlreiche technische und organisatorische
              Maßnahmen umgesetzt, um einen möglichst lückenlosen Schutz der
              über diese Internetseite verarbeiteten personenbezogenen Daten
              sicherzustellen. Dennoch können Internetbasierte
              Datenübertragungen grundsätzlich Sicherheitslücken aufweisen,
              sodass ein absoluter Schutz nicht gewährleistet werden kann. Aus
              diesem Grund steht es jeder betroffenen Person frei,
              personenbezogene Daten auch auf alternativen Wegen, beispielsweise
              telefonisch, an uns zu übermitteln.
            </p>
            <h4 className="font-bold"> 1. Begriffsbestimmungen </h4>
            <p className="mb-5 mt-3">
              Die Datenschutzerklärung der Konak Facility Management beruht auf
              den Begrifflichkeiten, die durch den Europäischen Richtlinien- und
              Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung
              (DS-GVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl
              für die Öffentlichkeit als auch für unsere Kunden und
              Geschäftspartner einfach lesbar und verständlich sein. Um dies zu
              gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten
              erläutern.
            </p>
            <p>
              Wir verwenden in dieser Datenschutzerklärung unter anderem die
              folgenden Begriffe:
            </p>

            <div className="ml-10 mt-4">
              <h4 className="font-bold mt-4 mb-3">
                {" "}
                <span className="mr-3">a)</span> personenbezogene Daten
              </h4>
              <p>
                Personenbezogene Daten sind alle Informationen, die sich auf
                eine identifizierte oder identifizierbare natürliche Person (im
                Folgenden „betroffene Person“) beziehen. Als identifizierbar
                wird eine natürliche Person angesehen, die direkt oder indirekt,
                insbesondere mittels Zuordnung zu einer Kennung wie einem Namen,
                zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung
                oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck
                der physischen, physiologischen, genetischen, psychischen,
                wirtschaftlichen, kulturellen oder sozialen Identität dieser
                natürlichen Person sind, identifiziert werden kann.
              </p>
              <h4 className="font-bold mt-4 mb-3">
                <span className="mr-3">b)</span> betroffene Person
              </h4>
              <p>
                Betroffene Person ist jede identifizierte oder identifizierbare
                natürliche Person, deren personenbezogene Daten von dem für die
                Verarbeitung Verantwortlichen verarbeitet werden.
              </p>

              <h4 className="font-bold mt-4 mb-3">
                {" "}
                <span className="mr-3"> c)</span> Verarbeitung
              </h4>
              <p>
                Verarbeitung ist jeder mit oder ohne Hilfe automatisierter
                Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im
                Zusammenhang mit personenbezogenen Daten wie das Erheben, das
                Erfassen, die Organisation, das Ordnen, die Speicherung, die
                Anpassung oder Veränderung, das Auslesen, das Abfragen, die
                Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder
                eine andere Form der Bereitstellung, den Abgleich oder die
                Verknüpfung, die Einschränkung, das Löschen oder die
                Vernichtung.
              </p>

              <h4 className="font-bold mt-4 mb-3">
                {" "}
                <span className="mr-3"> d)</span> Einschränkung der Verarbeitung
              </h4>
              <p>
                Einschränkung der Verarbeitung ist die Markierung gespeicherter
                personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung
                einzuschränken.
              </p>

              <h4 className="font-bold mt-4 mb-3 ">
                {" "}
                <span className="mr-3"> e)</span> Profiling
              </h4>
              <p>
                Profiling ist jede Art der automatisierten Verarbeitung
                personenbezogener Daten, die darin besteht, dass diese
                personenbezogenen Daten verwendet werden, um bestimmte
                persönliche Aspekte, die sich auf eine natürliche Person
                beziehen, zu bewerten, insbesondere, um Aspekte bezüglich
                Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, persönlicher
                Vorlieben, Interessen, Zuverlässigkeit, Verhalten,
                Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu
                analysieren oder vorherzusagen.
              </p>

              <h4 className="font-bold mt-4 mb-3">
                {" "}
                <span className="mr-3"> f)</span> Pseudonymisierung
              </h4>
              <p>
                Pseudonymisierung ist die Verarbeitung personenbezogener Daten
                in einer Weise, auf welche die personenbezogenen Daten ohne
                Hinzuziehung zusätzlicher Informationen nicht mehr einer
                spezifischen betroffenen Person zugeordnet werden können, sofern
                diese zusätzlichen Informationen gesondert aufbewahrt werden und
                technischen und organisatorischen Maßnahmen unterliegen, die
                gewährleisten, dass die personenbezogenen Daten nicht einer
                identifizierten oder identifizierbaren natürlichen Person
                zugewiesen werden.
              </p>
              <h4 className="font-bold mt-4 mb-3">
                {" "}
                <span className="mr-3"> g) </span> Verantwortlicher oder für die
                Verarbeitung Verantwortlicher
              </h4>
              <p>
                Verantwortlicher oder für die Verarbeitung Verantwortlicher ist
                die natürliche oder juristische Person, Behörde, Einrichtung
                oder andere Stelle, die allein oder gemeinsam mit anderen über
                die Zwecke und Mittel der Verarbeitung von personenbezogenen
                Daten entscheidet. Sind die Zwecke und Mittel dieser
                Verarbeitung durch das Unionsrecht oder das Recht der
                Mitgliedstaaten vorgegeben, so kann der Verantwortliche
                beziehungsweise können die bestimmten Kriterien seiner Benennung
                nach dem Unionsrecht oder dem Recht der Mitgliedstaaten
                vorgesehen werden.
              </p>
              <h4 className="font-bold mt-4 mb-3">
                {" "}
                <span className="mr-3"> h)</span> Auftragsverarbeiter
              </h4>
              <p>
                Auftragsverarbeiter ist eine natürliche oder juristische Person,
                Behörde, Einrichtung oder andere Stelle, die personenbezogene
                Daten im Auftrag des Verantwortlichen verarbeitet.
              </p>
              <h4 className="font-bold mt-4 mb-3">
                <span className="mr-3"> i) </span> Empfänger
              </h4>
              <p>
                Empfänger ist eine natürliche oder juristische Person, Behörde,
                Einrichtung oder andere Stelle, der personenbezogene Daten
                offengelegt werden, unabhängig davon, ob es sich bei ihr um
                einen Dritten handelt oder nicht. Behörden, die im Rahmen eines
                bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem
                Recht der Mitgliedstaaten möglicherweise personenbezogene Daten
                erhalten, gelten jedoch nicht als Empfänger.
              </p>

              <h4 className="font-bold mt-4 mb-3">
                {" "}
                <span className="mr-3">j) </span> Dritter
              </h4>
              <p>
                Dritter ist eine natürliche oder juristische Person, Behörde,
                Einrichtung oder andere Stelle außer der betroffenen Person, dem
                Verantwortlichen, dem Auftragsverarbeiter und den Personen, die
                unter der unmittelbaren Verantwortung des Verantwortlichen oder
                des Auftragsverarbeiters befugt sind, die personenbezogenen
                Daten zu verarbeiten.
              </p>

              <h4 className="font-bold mt-4 mb-3">
                {" "}
                <span className="mr-3"> k)</span> Einwilligung
              </h4>
              <p>
                Einwilligung ist jede von der betroffenen Person freiwillig für
                den bestimmten Fall in informierter Weise und unmissverständlich
                abgegebene Willensbekundung in Form einer Erklärung oder einer
                sonstigen eindeutigen bestätigenden Handlung, mit der die
                betroffene Person zu verstehen gibt, dass sie mit der
                Verarbeitung der sie betreffenden personenbezogenen Daten
                einverstanden ist.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Datenschutz;
