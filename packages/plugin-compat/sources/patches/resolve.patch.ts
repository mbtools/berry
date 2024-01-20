let patch: string;

export function getPatch() {
  if (typeof patch === `undefined`)
    patch = require(`zlib`)
      .brotliDecompressSync(
        Buffer.from(
          `G8MSIIzURnVBnObTcvb3XE6v2S9Qgc2K801Oa5otNKEtK8BINZNcaQHy+9/vf/WXBimwutXC33P2DPc64pps5rz7NGGWaOKNSPL4Y2KRE8twut2lFOIN+OXPtRmPMRhMTILib2bEQx43az2I5d3YS8Roa5UZpF/ujHb3Djd3GDvYUfvFYSUQ39vb2cmifp/rgB4J/65JK3wRBTvMBoNBmn3mbXC63/gbBkW/2IRPri0O8bcsRBsmarF328pAln04nyJFkwUAvNu934supAqLtyerZZpJ8I8suJHhf/ocMV+scKwa8NOiDKIPXw6Ex/EEZD6TEGaW8N5zvNHYF10l6Lfooj7D5W2k3dgvQSbp2Wv8TGOayS978gxlOLVjTGXs66ozewbrjwElLtyrYNnWTfzzdEutgROUFPVMhnMoy8EjJLLlWwIEoySxliim9kYW30JUHiPVyjt0iAw/ZpPmCbUCltYPnq6ZNblIKhTNhqS/oqC9iya5sGKZTOVsTEg34n92uZTf2iPpcZih8rPW8CzA+adIGmyCPcKdLMsBLShd+zuEbTrqpwuh+DLmracZcjPC5Sdf5odDAhKpFuOsQS67RT+1VgWWygSv3YwxDnylc04/PYuaMeIzhBkLrvs7e/OUzRTF56MmfY6rI63QtEjEQzq637zQqJ39nNhu3NmoRRhW/086bHGBUtx0PE0j3aEGvkdh9WJC8y8j8mqqke9/dQ5la+Q3ba4RlhvTbnfQhPDDab3tUifkjKuOsp13mXEmO00Mu88F/M67R7LXfoFDFLNtgCSWjWX+3Jn1371pJTK9xPBiMJafvDjtFyAzu8rxeQ0TKMQXNPs5xxiBOd+BRJP8KP88XPtJIbZKh/cdW8KvBUkpqKpGoiIaA32c3/JnQr4efXt85mXvidOvn/eU3Pase1typLYBalJ14mCso9h79nuMOuCa/kZAOkJHmTjP5RM2WNoPasZUAnT1TAE/NH25hUxcQv6hQWR/m1PKk4ooXMcM4SR1iYU3fUohvqk4RY2hbmTVVIXv6TvqO+0doOjgeVFAcom+RlwJQmOVH7pr1Q9LoJT6n1DeQEB+NHygsATbIwTcOKZlJsY8G4+suX1uQLjUWwLjjs0mvSvZcLTpIGAekeR7GCgl8eo3ndAqEe2XCav4huliHjdbIPBsGJuPX7lrO9HX1UbXRH5opOe1x6JsOSgHZR+EaxuXVhpLLxm6jk1LJtZfHSc6BKPun3CpYYVMJGwEUyk8MTGG0XL5MfEwaXpnc9TKnBmlGn6nHiGREc3ysn47XIBDzA+YvFdjZzVIEDcKGpS6PbUJehFRjEne8D0lVU1XuRtlgszq6pTNlQ/3MzNOEgCWPyTct22V2mEi2krizn5VDo9B19/X2DB3hCGRMM7ONbtnAcIx/OWB1u5uPbW1gsH8irXxT/IzG0PoXWYjhbMsH3KTuoOl5o17PulcgvsfTSnKFM354GWI8luqZnrswWjiXy3G+Vbyo1KMopFmmvBwNELgaS8z8dNZchx/Cl/xjddxhMcyqtzFyONb2Zdu90NkI8pAeufe7YlXrp53v8Dj/l8vWeVspRKBGXScBBPI/HinSTGmLDOGGOCIyH0JFdOZx0gWsacNlQLJMIrBhqRxXxHF/5pseWwejlAAvZ3klZSDSYY8mkToaWejXhgNomeGtx1DTLEUFMRkgF5yFB22WYdJnaWN14r1YJj81hGi45+jrADS5nYRhCiSlCJJ1nL8pYX+HDSMhdTEWyRcgHVp/IsUIZYMfT+YYncUQPgcxNGCHfZ88vDdrcUuaGIl6zhAsiaq7R5dfqrqXH/JcBhfjT8D0azayIyEz75Nxp6YkcyDxlJq3EXnJUpqDohJJOysL1t1uNiHESlvsxPb5cpbW0+ICZqJmUZus1BMW0F5IVBODLIo2zHHjA0=`,
          `base64`,
        ),
      )
      .toString();

  return patch;
}
