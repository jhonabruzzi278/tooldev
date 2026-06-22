---
name: Osmo
description: Plataforma de IA para diseño de aromas y olfacción digital que utiliza machine learning para predecir, crear y digitalizar olores.
category: productividad
tags: [olfaccion, aromas, ia, machine-learning, quimica, diseno, sensorial, investigacion]
officialSite: https://www.osmo.ai
pricing: pago
openSource: false
technicalLevel: avanzado
compatibility: [Web, Linux]
features:
  - Predicción de propiedades olfativas de moléculas mediante IA
  - Diseño de fragancias y aromas usando modelos generativos
  - Mapa digital del espacio olfativo con embeddings moleculares
  - API para integración en pipelines de investigación química
  - Base de datos de relaciones estructura-olor entrenada con datos sensoriales
  - Herramientas de exploración para descubrir nuevas moléculas aromáticas
howToUse:
  - step: 1
    title: "Solicita acceso a la plataforma"
    description: "Contacta al equipo de Osmo para solicitar acceso a la plataforma. Osmo trabaja principalmente con empresas de fragancias, alimentos y químicas. El proceso incluye una evaluación de tu caso de uso y necesidades de investigación."
  - step: 2
    title: "Explora el mapa olfativo y define objetivos"
    description: "Usa el mapa digital del espacio olfativo para explorar relaciones entre moléculas y sus propiedades de olor. Define el perfil aromático objetivo que buscas (notas, intensidad, longevidad) usando los descriptores del sistema."
  - step: 3
    title: "Genera y evalúa candidatos moleculares"
    description: "Utiliza los modelos generativos para producir candidatos moleculares que cumplan tu perfil olfativo objetivo. El sistema predice propiedades sensoriales antes de la síntesis, permitiendo filtrar candidatos virtualmente antes de pruebas de laboratorio."
  - step: 4
    title: "Valida en laboratorio e itera"
    description: "Sintetiza los mejores candidatos predichos por la IA y realiza evaluaciones sensoriales con paneles humanos. Alimenta los resultados de vuelta al sistema para mejorar las predicciones en iteraciones futuras."
whenToUse:
  - title: "Diseño de nuevas fragancias y aromas"
    description: "Cuando necesitas diseñar moléculas aromáticas con propiedades específicas (frescura, floral, amaderado) y quieres explorar el espacio químico de forma más eficiente que el método tradicional de prueba y error en laboratorio."
  - title: "Investigación en ciencia de olores y sabores"
    description: "Para investigadores que estudian la relación entre estructura molecular y percepción olfativa, ofreciendo herramientas computacionales para predecir cómo una molécula olerá antes de sintetizarla físicamente."
examples:
  - title: "Predicción de perfil olfativo de una molécula"
    code: |
      # Ejemplo conceptual de uso de la API de Osmo

      import osmo

      # Definir molécula por su estructura SMILES
      molecule = osmo.Molecule("CC(=O)C1=CC=CC=C1")

      # Predecir propiedades olfativas
      prediction = osmo.predict_odor(molecule)

      print(prediction)
      # {
      #   "descriptors": ["floral", "dulce", "polvo"],
      #   "intensity": 0.72,
      #   "pleasantness": 0.65,
      #   "similarity_to": ["rosa", "violeta"],
      #   "confidence": 0.89
      # }

      # Buscar moléculas similares en el espacio olfativo
      neighbors = osmo.find_similar(molecule, top_k=5)
    output: "Predicción de descriptores olfativos, intensidad y agradabilidad de la molécula basada en su estructura química, sin necesidad de síntesis o evaluación sensorial humana."
tips:
  - text: "Comienza explorando el mapa olfativo para entender las relaciones entre familias de aromas antes de intentar diseñar moléculas nuevas desde cero."
  - text: "Combina las predicciones de la IA con evaluaciones sensoriales humanas para validar y mejorar iterativamente la precisión del modelo para tu dominio específico."
  - text: "Usa las restricciones de sintetizabilidad y seguridad al generar candidatos para asegurar que las moléculas propuestas sean viables para producción real."
  - text: "Documenta sistemáticamente las discrepancias entre predicciones y evaluaciones sensoriales para contribuir a la mejora del modelo con datos de tu dominio."
faq:
  - question: "¿Cómo puede la IA predecir cómo huele una molécula?"
    answer: "Osmo entrena modelos de machine learning con datos de paneles sensoriales humanos que asocian estructuras moleculares con descriptores de olor. El modelo aprende patrones entre la geometría 3D de las moléculas y su percepción olfativa, permitiendo predecir olores de moléculas no sintetizadas."
  - question: "¿Quién puede usar Osmo?"
    answer: "Osmo está dirigido principalmente a empresas de fragancias, alimentos, químicas y laboratorios de investigación. No es una herramienta de consumo general. Se requiere conocimiento de química orgánica y ciencia de aromas para aprovechar la plataforma."
  - question: "¿Qué tan precisas son las predicciones?"
    answer: "La precisión varía según la familia química. Para moléculas similares a las del dataset de entrenamiento, la precisión es alta (>80% en descriptores principales). Para estructuras químicas muy novedosas, las predicciones son menos confiables y requieren validación experimental."
  - question: "¿Osmo reemplaza a los perfumistas humanos?"
    answer: "No, Osmo complementa la expertise humana. Ayuda a explorar el espacio molecular más eficientemente y pre-filtrar candidatos, pero la evaluación final y la creatividad del diseño de fragancias sigue requiriendo la nariz y el criterio de perfumistas experimentados."
publishedAt: 2025-06-15
---

## ¿Qué es?

Osmo es una plataforma de inteligencia artificial especializada en olfacción digital y diseño de aromas. Utiliza modelos de machine learning para mapear, predecir y generar moléculas con propiedades olfativas específicas, digitalizando el sentido del olfato de forma similar a como las cámaras digitalizaron la visión.

## ¿Para qué sirve?

Sirve para acelerar el descubrimiento y diseño de nuevas moléculas aromáticas. Permite predecir cómo olerá una molécula antes de sintetizarla, explorar el espacio olfativo de forma computacional, y diseñar fragancias con propiedades objetivo específicas, reduciendo significativamente el tiempo y costo del proceso tradicional de prueba y error en laboratorio.

## Cuándo usarla

- Para diseño de nuevas fragancias donde necesitas explorar miles de candidatos moleculares eficientemente.
- En investigación de relaciones estructura-olor para entender la ciencia de la percepción olfativa.
- Cuando necesitas predecir propiedades sensoriales de moléculas antes de invertir en síntesis costosa.
- Para reemplazar ingredientes aromáticos problemáticos (alérgenos, no sostenibles) con alternativas que huelan similar.

## Cuándo NO usarla

- Si no tienes formación en química orgánica o ciencia de aromas.
- Para aplicaciones donde no necesitas crear o modificar moléculas aromáticas.
- Cuando tu presupuesto no cubre una plataforma empresarial especializada.
- Si necesitas resultados inmediatos sin validación experimental posterior.

## Pros

- Reduce drásticamente el tiempo de descubrimiento de nuevas moléculas aromáticas.
- Permite explorar computacionalmente espacios químicos imposibles de cubrir manualmente.
- Predicciones de alta confianza para familias químicas bien representadas.
- Integración con workflows de investigación química existentes.
- Pionero en un campo emergente con potencial transformador.

## Contras

- Acceso restringido a empresas e instituciones de investigación.
- Requiere expertise técnica significativa en química y ciencia de aromas.
- Las predicciones necesitan validación experimental en laboratorio.
- Costo elevado orientado a presupuestos empresariales.
- Campo emergente con limitaciones inherentes en moléculas muy novedosas.
