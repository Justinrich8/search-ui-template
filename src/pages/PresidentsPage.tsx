import { useLayoutEffect } from "react";
import { useSearchActions } from "@yext/search-headless-react";
import {
  AppliedFilters,
  FilterSearch,
  ResultsCount,
  SearchBar,
  //StandardCard,
  VerticalResults,
  LocationBias,
  StaticFilters,
  StandardFacets,
  HierarchicalFacets,
  FilterDivider,
  ApplyFiltersButton,
  Pagination,
  NumericalFacets,
  AlternativeVerticals,
} from "@yext/search-ui-react";
 import { CustomCard } from '../components/CustomCard';
import { PresidentCard } from "../components/PresidentCard";

const hierarchicalFacetFieldIds = ["c_hierarchicalFacet"];
const filterSearchFields = [{ fieldApiName: "name", entityType: "ce_wikiBio" }];
/*const employeeFilterConfigs = [
  { value: "Consulting" },
  { value: "Technology" },
];*/
//const hierarchicalFilterConfigs = [{ value: "Party" }];
const alternativeVerticalsConfigMap = {
  presidents: { label: "Presidents" },
};

export function PresidentsPage() {
  const searchActions = useSearchActions();
  useLayoutEffect(() => {
    searchActions.setVertical("presidents");
    searchActions.executeVerticalQuery();
  });

  return (
    <div>
      <SearchBar />
      <div className="flex">
        <div className="w-56 shrink-0 mr-5">
          <FilterSearch
            searchFields={filterSearchFields}
            searchOnSelect={true}
            label="Filters"
          />
          <FilterDivider />

          <NumericalFacets />
          <StandardFacets excludedFieldIds={hierarchicalFacetFieldIds} />
          <HierarchicalFacets
            collapsible={true}
            includedFieldIds={hierarchicalFacetFieldIds}
          />
          <br />
          <ApplyFiltersButton />
        </div>
        <div className="flex-grow">
          <AlternativeVerticals
            currentVerticalLabel="Presidents"
            verticalConfigMap={{
              presidents: { label: "Presidents" },
            }}
          />
          <div className="flex items-baseline">
            <ResultsCount />
            <AppliedFilters
              hierarchicalFacetsFieldIds={hierarchicalFacetFieldIds}
            />
          </div>
          <VerticalResults CardComponent={PresidentCard} />
          {/* Test generic result type  */}
          {/* <VerticalResults
            CardComponent={CustomCard}
          /> */}
          <Pagination />
          <LocationBias />
        </div>
      </div>
    </div>
  );
}
