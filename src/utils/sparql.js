export const keywords = [
  'ABS',
  'AS',
  'ASC',
  'AVG',
  'BIND',
  'BNODE',
  'BOUND',
  'CEIL',
  'COALESCE',
  'CONCAT',
  'CONTAINS',
  'COUNT',
  'DATATYPE',
  'DAY',
  'DESC',
  'DISTINCT',
  'EXISTS',
  'IF',
  'IN',
  'IRI',
  'ENCODE_FOR_URI',
  'FILTER',
  'FLOOR',
  'GROUP BY',
  'GROUP_CONCAT',
  'HAVING',
  'HOURS',
  'LCASE',
  'LANG',
  'LANGMATCHES',
  'LIMIT',
  'MAX',
  'MD5',
  'MIN',
  'MINUTES',
  'MONTH',
  'NOT EXISTS',
  'NOT IN',
  'NOW',
  'OFFSET',
  'OPTIONAL',
  'ORDER BY',
  'PREFIX',
  'RAND',
  'REDUCED',
  'REGEX',
  'REPLACE',
  'ROUND',
  'SAMPLE',
  'SECONDS',
  'SELECT',
  'SERVICE',
  'SEPARATOR',
  'SHA1',
  'SHA256',
  'SHA384',
  'SHA512',
  'STR',
  'STRAFTER',
  'STRBEFORE',
  'STRDT',
  'STRENDS',
  'STRLANG',
  'STRLEN',
  'STRSTARTS',
  'STRUUID',
  'SUBSTR',
  'SUM',
  'TIMEZONE',
  'TZ',
  'UCASE',
  'UNION',
  'UUID',
  'VALUES',
  'WHERE',
  'YEAR',
  'isBLANK',
  'isIRI',
  'isLITERAL',
  'isNUMERIC'
]

export const snippets = {
  'Label service':
    'SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }',

  'Disable optimizer': 'hint:Query hint:optimizer "None"',

  'Gas service SSSP':
    'SERVICE gas:service { gas:program gas:gasClass "com.bigdata.rdf.graph.analytics.SSSP" ;\n                      gas:in ?in ;\n                      gas:out ?out ;\n                      gas:out1 ?depth ;\n                      gas:out2 ?predecessor ;\n                      gas:maxIterations 10 ;\n                      gas:traversalDirection "Forward" ;\n                      gas:linkType ?linkType .\n}',

  'Gas service BFS':
    'SERVICE gas:service { gas:program gas:gasClass "com.bigdata.rdf.graph.analytics.BFS" ;\n                      gas:in ?in ;\n                      gas:target ?target ;\n                      gas:out ?out ;\n                      gas:out1 ?depth ;\n                      gas:out2 ?predecessor ;\n                      gas:maxIterations 10 ;\n                      gas:traversalDirection "Undirected" ;\n                      gas:linkType ?linkType .\n}'
}
